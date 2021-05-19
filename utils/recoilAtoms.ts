/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */

import {atom, DefaultValue} from 'recoil';
import {Log} from '../@types/log';
import {tableInit} from './table';

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

/**
 * 履歴テーブルの表示
 */
export const tableShowState = atom<boolean[]>({
  key: 'tableShow',
  default: tableInit,
});

/**
 * テーブルの日付短縮表示
 */
export const tableDateShortState = atom<boolean>({
  key: 'tableDateShort',
  default: false,
});

/**
 * クリップボード
 */
export const isCopyState = atom<boolean>({
  key: 'isCopy',
  default: false,
});

/**
 * 外部入力ログ
 */
export const otherLogState = atom<string>({
  key: 'otherLog',
  default: '',
});

/**
 * ログセーブの状態
 */
export const savedLogState = atom<boolean>({
  key: 'savedLog',
  default: false,
});

/**
 * 読み取り完了の確認テキスト
 */
export const confirmationTextState = atom<string>({
  key: 'confirmationText',
  default: '',
});

/**
 * Tweet link
 */
export const tweetLinkState = atom<string>({
  key: 'tweetLink',
  default: 'https://twitter.com/intent/tweet',
});

/**
 * 特殊な部屋名を表示するか
 */
export const uniqueRoomNameState = atom<boolean>({
  key: 'uniqueRoomName',
  default: true,
});

/**
 * LocalStorageのログデータをIndexedDBに保存するか
 */
export const isMoveIndexedDBState = atom<boolean>({
  key: '_isMoveIndexDB',
  default: false,
  effects_UNSTABLE: [localStorageEffect('_isMoveIndexedDB')],
});

/**
 * ログ表示テーブル
 */
export const logTableState = atom<Log[]>({
  key: 'logTable',
  default: [],
});

/**
 * 合計ログ数
 */
export const logCountState = atom<number>({
  key: 'logCount',
  default: 0,
});

/**
 * 表示するログ数
 */

export const logLenState = atom<number>({
  key: 'logLen',
  default: 15,
});
