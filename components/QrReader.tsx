import jsQR from 'jsqr';
import {Point} from 'jsqr/dist/locator';
import React from 'react';

interface Props {
  setData: React.Dispatch<React.SetStateAction<string>>;
}

const QrReader = (props: Props) => {
  const videoElement = React.useRef<HTMLVideoElement>(null);
  const canvasElement = React.useRef<HTMLCanvasElement>(null);
  const animationRef = React.useRef<number>(null);
  const [loadText, setLoadText] = React.useState<boolean>(true);
  const [isRead, setIsRead] = React.useState<boolean>(true);

  let canvasContext: CanvasRenderingContext2D | null = null;

  React.useEffect(() => {
    canvasContext = canvasElement.current?.getContext('2d');

    props.setData(null);
    // カメラ接続
    navigator.mediaDevices
      .getUserMedia({video: {facingMode: 'environment'}})
      .then(stream => {
        videoElement.current.srcObject = stream;
        videoElement.current.setAttribute('playsinline', 'true');
        videoElement.current.play();
        animationRef.current = requestAnimationFrame(tick);
      });
  }, []);

  const drawLine = (begin: Point, end: Point, color: string) => {
    if (canvasContext) {
      canvasContext.beginPath();
      canvasContext.moveTo(begin.x, begin.y);
      canvasContext.lineTo(end.x, end.y);
      canvasContext.lineWidth = 4;
      canvasContext.strokeStyle = color;
      canvasContext.stroke();
    }
  };

  const tick = () => {
    const video = videoElement.current;
    const canvas = canvasElement.current;

    if (video.readyState === video.HAVE_ENOUGH_DATA && canvasContext) {
      setLoadText(false);
      canvas.height = video.videoHeight;
      canvas.width = video.videoWidth;
      canvasContext.drawImage(video, 0, 0, canvas.width, canvas.height);

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
        drawLine(
          code.location.topLeftCorner,
          code.location.topRightCorner,
          '#FF3B58'
        );
        drawLine(
          code.location.topRightCorner,
          code.location.bottomRightCorner,
          '#FF3B58'
        );
        drawLine(
          code.location.bottomRightCorner,
          code.location.bottomLeftCorner,
          '#FF3B58'
        );
        drawLine(
          code.location.bottomLeftCorner,
          code.location.topLeftCorner,
          '#FF3B58'
        );

        props.setData(code.data);

        setTimeout(() => {
          if (code.data && code.data !== '') {
            setIsRead(false);
          }
        }, 500);
      }
    }
    animationRef.current = requestAnimationFrame(tick);
  };

  return (
    <React.Fragment>
      <p hidden={!loadText}>ロード中</p>
      <video hidden={true} ref={videoElement}></video>
      <canvas width="100%" ref={canvasElement} hidden={!isRead}></canvas>
      <button
        onClick={() => {
          setIsRead(true);
        }}
      >
        リセット
      </button>
    </React.Fragment>
  );
};

export default QrReader;
