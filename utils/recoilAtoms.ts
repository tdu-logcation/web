import {atom} from 'recoil';

/**
 * - 読み取り完了: true
 * - 読み取り前: false
 */
export const qrReadState = atom({
  key: 'qrReadSuccess',
  default: false,
});

/**
 * - ロード中: true
 * - ロード完了: false
 */
export const qrLoadState = atom({
  key: 'qrLoad',
  default: true,
});

/**
 * カメラ使用状態
 */
export const useCameraState = atom({
  key: 'useCamera',
  default: true,
});

/**
 * QR readerコンポーネントの状態
 * - ユーザーがカメラ利用を拒否した場合、QRの読み取りが完了した場合にtrueとなります。
 */
export const cameraComponentState = atom({
  key: 'cameraComponent',
  default: true,
});

/**
 * QR読み取りデータ
 */
export const qrDataState = atom({
  key: 'qrData',
  default: null,
});
