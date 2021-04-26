/**!
 *
 * Copyright (C) 2021 logcation
 */

import {ParsedLog, LogCampus} from '../@types/log';

const REG_EXP = /^(2)?(?<buildingNumber>[01]?[0-9])(?<floorNumber>[01]?[0-9])(?<roomNumber>[0-9][0-9])-(?<seatNumber>.+)$/;

const HATOYAMA_MIN = 6;
const HATOYAMA_MAX = 7;

/**
 * 読み取ったデータをバリデートします
 *
 * @param qrData QRコードのデータ
 * @returns 正しいデータか否か
 */
export function validateQrData(qrData: string): boolean {
  const code = qrData.slice(qrData.indexOf('/') + 1);

  if (!REG_EXP.test(code)) {
    return false;
  }

  return true;
}

/**
 * バリデート済みのデータをパースして適切なオブジェクトで返します
 *
 * @param qrData QRコードのデータ
 * @returns Log
 */
export function parseQrData(qrData: string): ParsedLog {
  const code = qrData.slice(qrData.indexOf('/') + 1);
  const data = code.match(REG_EXP).groups;

  return {
    buildingNumber: data.buildingNumber,
    floorNumber: data.floorNumber,
    roomNumber: data.buildingNumber + data.floorNumber + data.roomNumber,
    seatNumber: data.seatNumber,
  };
}

/**
 * 座席コードからキャンパスの逆引き
 *
 * @param qrData QRコードのデータ
 * @returns LogType
 */
export function getLogCampus(qrData: string): LogCampus {
  const code = qrData.slice(qrData.indexOf('/') + 1);
  const headCode = code.slice(0, code.indexOf('-'));

  if (headCode.length >= HATOYAMA_MIN && headCode.length <= HATOYAMA_MAX) {
    return LogCampus.hatoyama;
  }

  return LogCampus.senju;
}
