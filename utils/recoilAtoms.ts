/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */

import {atom, DefaultValue} from 'recoil';
import {Log} from '../@types/log';

const localStorageEffect = (key: string) => ({setSelf, onSet}) => {
  const savedValue = localStorage.getItem(key);
  if (savedValue !== null) {
    setSelf(JSON.parse(savedValue));
  }

  onSet((newValue: DefaultValue | string) => {
    if (newValue instanceof DefaultValue) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  });
};

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
export const qrDataState = atom<string>({
  key: 'qrData',
  default: null,
});

/**
 * ログ情報
 */
export const logState = atom<Log[]>({
  key: 'log',
  default: [],
  effects_UNSTABLE: [localStorageEffect('log')],
});

/**
 * ダイレクト入力情報
 */
export const directText = atom<string>({
  key: 'directText',
  default: '',
});
