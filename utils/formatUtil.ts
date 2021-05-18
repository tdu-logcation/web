/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */

import {tableShow} from './table';
import {Log, LogType} from '../@types/log';
import LogUtil from './LogUtil';
import {LogConvert} from './logConvert';

/**
 * 日付をフォーマットします。
 *
 * @param date date object
 * @returns フォーマットした文字列
 */
export function formatDate(dateStr: string, isShort: boolean) {
  const date = new Date(dateStr);

  const week = ['日', '月', '火', '水', '木', '金', '土'];

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const weekDay = week[date.getDay()];
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  if (isShort) {
    return `${day}日 ${hour}:${('00' + minutes).slice(-2)}`;
  }
  return `${year}年${month}月${day}日${weekDay}曜日 ${hour}:${(
    '00' + minutes
  ).slice(-2)}`;
}

/**
 * テーブルの表示非表示用の配列に変換します
 *
 * @param showData booleanの配列
 * @returns
 */
export function formatTableShow(showData: boolean[]) {
  const show = [];

  showData.forEach((element, index) => {
    if (!element) {
      show.push(tableShow[index].id);
    }
  });

  return show;
}

/**
 * ログをリレキログフォーマットに変換します。
 *
 * "label",YYYY/MM/DD,HH:mm:ss,"read string"\n
 *
 * @param log ログデータ
 * @returns フォーマットした文字列
 */
export function exportLog(log: Log[]): string {
  // TODO: 日時を指定してその期間のみにする
  const formattedLogs = log.map(element => {
    const date = new Date(element.date);
    return `"${element.label}",${date.getFullYear()}/${padding(
      date.getMonth() + 1
    )}/${padding(date.getDate())},${padding(date.getHours())}:${padding(
      date.getMinutes()
    )}:${padding(date.getSeconds())},"${element.code}"`;
  });

  return formattedLogs.join('\n');
}

/**
 * 0埋めします。
 *
 * @param element number
 * @returns 0埋めした文字
 */
const padding = (element: number): string => ('00' + element).slice(-2);

/**
 * 外部のログデータをフォーマットします。
 *
 * @param otherLog 外部ログデータ
 * @returns ログデータ
 */
export function formatOtherLog(otherLog: string): Log | null {
  const regularExpression = /^"(?<label>[^"]*)",\s?(?<date>.+),\s?(?<time>.+),\s?"(?<code>jp.ac.dendai\/[^"]+)"$/;
  const dateExpression = /^(?<year>[0-9]{4})\/(?<month>[0-1][0-9])\/(?<date>[0-3][0-9])$/;
  const timeExpression = /^(?<hour>[0-2][0-9]):(?<minute>[0-5][0-9]):(?<sec>[0-5][0-9])$/;

  if (regularExpression.test(otherLog)) {
    const logData = otherLog.match(regularExpression).groups;
    const logUtil = new LogUtil(logData.code);
    if (logUtil.parseQrData) {
      const date = logData.date.match(dateExpression).groups;
      const time = logData.time.match(timeExpression).groups;
      return {
        label: logData.label,
        code: logData.code,
        date: new Date(
          Number(date.year),
          Number(date.month) - 1,
          Number(date.date),
          Number(time.hour),
          Number(time.minute),
          Number(time.sec)
        ).toLocaleString('ja-JP'),
        type: LogType.normal,
        campus: logUtil.getLogCampus(),
      };
    }
  }

  return null;
}

/**
 * 追加完了モーダルのテキスト
 * @param log Log[]
 * @returns text
 */
export function resultText(log: Log[]): string {
  if (log.length !== 0) {
    const logConvert = new LogConvert(log[log.length - 1]);
    if (logConvert.isUseLog()) {
      return logConvert.successText();
    }
  }

  return 'Error: ログを読み込めませんでした';
}

/**
 * ツイート文生成
 * @param log Log[]
 * @returns tweet url
 */
export function tweetText(log: Log[]): string {
  const logLen = log.length;
  if (logLen !== 0) {
    const logConvert = new LogConvert(log[logLen - 1]);
    if (logConvert.isUseLog()) {
      const hashTag = 'Logcation';
      const link = window.location.href;

      const tweet = logConvert.tweetText(logLen);

      return `https://twitter.com/intent/tweet?text=${tweet}&url=${link}&hashtags=${hashTag}`;
    }
  }
}

/**
 * 表示するログの量
 */
export function logLenText(len: number): string {
  if (len === 15.0) {
    return '全期間';
  }
  return `過去${Math.floor(len)}日`;
}
