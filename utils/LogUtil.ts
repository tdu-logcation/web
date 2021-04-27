/**!
 *
 * Copyright (C) 2021 logcation
 */

import {ParsedLog, LogCampus} from '../@types/log';

export default class LogUtil {
  /* 正規表現 */
  private REG_EXP = /^jp.ac.dendai\/(?<headCode>(2)?(?<buildingNumber>[01]?[0-9])(?<floorNumber>[01]?[0-9])(?<roomNumber>[0-9][0-9]))-(?<seatNumber>.+)$/;

  /* 鳩山キャンパス判定用 しきい値 */
  private HATOYAMA_MIN = 6;
  private HATOYAMA_MAX = 7;

  /* 座席コード */
  qrData: string;

  constructor(qrData: string) {
    this.qrData = qrData;
  }

  /**
   * 読み取ったデータをバリデートします
   *
   * @returns 正しいデータか否か
   */
  public validateQrData(): boolean {
    if (!this.REG_EXP.test(this.qrData)) {
      return false;
    }

    return true;
  }

  /**
   * バリデート済みのデータをパースして適切なオブジェクトで返します
   *
   * @returns Log
   */
  public parseQrData(): ParsedLog {
    const data = this.qrData.match(this.REG_EXP).groups;

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
   * @returns LogType
   */
  public getLogCampus(): LogCampus {
    const headCode = this.qrData.match(this.REG_EXP).groups.headCode;

    if (
      headCode.length >= this.HATOYAMA_MIN &&
      headCode.length <= this.HATOYAMA_MAX
    ) {
      return LogCampus.hatoyama;
    }

    return LogCampus.senju;
  }
}
