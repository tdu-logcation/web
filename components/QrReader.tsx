/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */

import jsQR from 'jsqr';
import React from 'react';
import {
  qrHighlight,
  readDelay,
  canvasHeight,
  canvasWidth,
  webRTCConfig,
} from '../utils/qrUtil';
import {useRecoilState} from 'recoil';
import {
  qrReadState,
  qrLoadState,
  useCameraState,
  qrDataState,
} from '../utils/recoilAtoms';
import {Center, useToast} from '@chakra-ui/react';

const QrReader = () => {
  const [isQrRead, setIsQrRead] = useRecoilState(qrReadState);
  const [isQrLoad, setIsQrLoad] = useRecoilState(qrLoadState);
  const [useCamera, setUseCamera] = useRecoilState(useCameraState);
  const [, setQrData] = useRecoilState(qrDataState);

  const videoElement = document.createElement('video');
  const canvasElement = React.useRef<HTMLCanvasElement>(null);

  const toast = useToast();

  let canvasContext: CanvasRenderingContext2D | null = null;
  let animationFrame = 0;
  let videoStream: MediaStream = null;

  React.useEffect(() => {
    if (typeof navigator.mediaDevices === 'undefined') {
      toast({
        title: 'SSL通信ではないためカメラは使用できません',
        status: 'warning',
      });
      setUseCamera(false);

      return;
    }

    canvasContext = canvasElement.current.getContext('2d');

    setUseCamera(true);
    // カメラ接続
    navigator.mediaDevices
      .getUserMedia(webRTCConfig)
      .then(stream => {
        videoElement.srcObject = stream;
        videoStream = stream;
        videoElement.setAttribute('playsinline', 'true');
        videoElement.play();
        setIsQrLoad(false);
        animationFrame = requestAnimationFrame(tick);
      })
      .catch(() => {
        setUseCamera(false);
      });
  }, []);

  const tick = () => {
    const canvas = canvasElement.current;

    try {
      if (
        videoElement.readyState === videoElement.HAVE_ENOUGH_DATA &&
        canvasContext
      ) {
        canvas.height = canvasHeight;
        canvas.width = canvasWidth;
        canvasContext.drawImage(
          videoElement,
          0,
          0,
          canvas.width,
          canvas.height
        );

        const imageData = canvasContext.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: 'dontInvert',
        });

        if (code) {
          setQrData(code.data);

          qrHighlight(
            code.location.topLeftCorner,
            code.location.topRightCorner,
            code.location.bottomLeftCorner,
            code.location.bottomRightCorner,
            canvasContext
          );

          setTimeout(() => {
            if (code.data && code.data !== '') {
              setIsQrRead(true);
              cancelAnimationFrame(animationFrame);
              const tracks = videoStream.getTracks();
              tracks.forEach(track => track.stop());
              return;
            }
          }, readDelay);
        }
        if (!useCamera) {
          cancelAnimationFrame(animationFrame);
        }
      }
      animationFrame = requestAnimationFrame(tick);
    } catch (error) {
      cancelAnimationFrame(animationFrame);
      const tracks = videoStream.getTracks();
      tracks.forEach(track => track.stop());
      setUseCamera(true);
      return;
    }
  };

  return (
    <Center>
      <canvas ref={canvasElement} hidden={isQrRead || isQrLoad}></canvas>
    </Center>
  );
};

export default QrReader;
