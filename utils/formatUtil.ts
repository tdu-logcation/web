/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */

import {tableShow} from './table';
import {Log, LogType} from '../@types/log';
import LogUtil from './LogUtil';

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
    const logData = new LogUtil(log[log.length - 1].code);
    if (logData.validateQrData()) {
      const data = logData.parseQrData();

      return `${data.buildingNumber}号館 ${data.floorNumber}階${data.roomNumber}教室`;
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
    const logData = new LogUtil(log[logLen - 1].code);
    if (logData.validateQrData()) {
      const data = logData.parseQrData();

      const hashTag = 'Logcation';
      const link = window.location.href;

      const tweet = `I'm at ${
        data.roomNumber
      }教室%0d%0d合計ログ数: ${logLen}%0d${additionalText(logLen)}%0d`;

      return `https://twitter.com/intent/tweet?text=${tweet}&url=${link}&hashtags=${hashTag}`;
    }
  }
}

/**
 * 余計な一言
 * @param logNumber log number.
 * @returns text
 */
function additionalText(logNumber: number): string {
  if (logNumber === 1) {
    return 'はじめてのログ！';
  }
  if (logNumber < 5) {
    return '頑張っている！';
  }
  if (logNumber < 10) {
    return '凄い！！！';
  }
  if (logNumber < 20) {
    return 'めっちゃ凄い！！！';
  }
  if (logNumber < 30) {
    return '実績を解除しました: 神';
  }
  if (logNumber < 40) {
    return '開発者もびっくり！';
  }
  return 'これ以上は定義してないので開発者に問い合わせてください…';
}
