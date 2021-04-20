import jsQR from 'jsqr';
import React from 'react';
import {
  qrHighlight,
  readDelay,
  canvasHeight,
  canvasWidth,
  webRTCConfig,
} from '../utils/qrUtil';
import {ScaleFade} from '@chakra-ui/react';

interface Props {
  setData: React.Dispatch<React.SetStateAction<string>>;
  reserve: () => void;
  isRead: boolean;
  setIsRead: React.Dispatch<React.SetStateAction<boolean>>;
  hidden: boolean;
  setUseCamera: React.Dispatch<React.SetStateAction<boolean>>;
}

const QrReader = (props: Props) => {
  const videoElement: HTMLVideoElement = document.createElement('video');
  const canvasElement = React.useRef<HTMLCanvasElement>(null);

  let canvasContext: CanvasRenderingContext2D | null = null;

  React.useEffect(() => {
    canvasContext = canvasElement.current.getContext('2d');

    props.setData(null);
    // カメラ接続
    navigator.mediaDevices
      .getUserMedia(webRTCConfig)
      .then(stream => {
        videoElement.srcObject = stream;
        videoElement.setAttribute('playsinline', 'true');
        videoElement.play();
        props.reserve();
        requestAnimationFrame(tick);
      })
      .catch(() => {
        props.setUseCamera(false);
      });
  }, []);

  const tick = () => {
    const canvas = canvasElement.current;

    if (
      videoElement.readyState === videoElement.HAVE_ENOUGH_DATA &&
      canvasContext
    ) {
      canvas.height = canvasHeight;
      canvas.width = canvasWidth;
      canvasContext.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

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
        props.setData(code.data);

        qrHighlight(
          code.location.topLeftCorner,
          code.location.topRightCorner,
          code.location.bottomLeftCorner,
          code.location.bottomRightCorner,
          canvasContext
        );

        setTimeout(() => {
          if (code.data && code.data !== '') {
            props.setIsRead(false);
          }
        }, readDelay);
      }
    }
    requestAnimationFrame(tick);
  };

  return (
    <canvas ref={canvasElement} hidden={!props.isRead || props.hidden}></canvas>
  );
};

export default QrReader;
