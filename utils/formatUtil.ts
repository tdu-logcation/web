/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */

import {tableShow} from './table';
import {Log} from '../@types/log';

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
  const month = date.getMonth();
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
      date.getMonth()
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
