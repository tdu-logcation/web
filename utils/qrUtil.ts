/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */

import {Point} from 'jsqr/dist/locator';

export const readDelay = 500;

export const canvasWidth = 270;
export const canvasHeight = 270;

export const webRTCConfig: MediaStreamConstraints = {
  video: {
    facingMode: 'environment',
    aspectRatio: {ideal: 1},
  },
};

/**
 * QRコードをハイライトします。
 *
 * @param topLeft QRコード左上の座標
 * @param topRight QRコード右上の座標
 * @param bottomLeft QRコード左下の座標
 * @param bottomRight QRコード右下の座標
 * @param canvas canvas
 */
export function qrHighlight(
  topLeft: Point,
  topRight: Point,
  bottomLeft: Point,
  bottomRight: Point,
  canvas: CanvasRenderingContext2D
) {
  canvas.beginPath();
  canvas.moveTo(topLeft.x, topLeft.y);
  canvas.lineTo(topRight.x, topRight.y);
  canvas.lineTo(bottomRight.x, bottomRight.y);
  canvas.lineTo(bottomLeft.x, bottomLeft.y);
  canvas.closePath();
  canvas.lineWidth = 4;
  canvas.strokeStyle = 'rgba(245, 27, 60, 1)';
  canvas.stroke();
  canvas.fillStyle = 'rgba(245, 27, 60, 0.5)';
  canvas.fill();
}

/**
 * ステータステキストを作成します。
 *
 * @param isLoad ロード中か
 * @param isRead 読み取り完了か
 * @param isUseCamera カメラ使用可か
 * @returns ステータステキスト
 */
export function cameraStatusText(
  isLoad: boolean,
  isRead: boolean,
  isUseCamera: boolean
) {
  if (!isUseCamera) {
    return 'カメラ停止中';
  }
  if (isLoad) {
    return 'カメラ待機中';
  }
  if (!isRead) {
    return '読み取り待機中';
  }
  return '読み取り完了';
}
