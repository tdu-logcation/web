/**!
 *
 * Copyright (C) 2021 logcation
 */

import {ParsedLog, LogCampus} from '../@types/log';

export default class LogUtil {
  /* 正規表現 */
  private senju_regular_expression = /^jp.ac.dendai\/(?<buildingNumber>[1-5])(?<floorNumber>1?[0-9])(?<roomNumber>[01][0-9][AB]?)-(?<seatNumber>[^-]+)$/;
  private hatoyama_regular_expression = /^jp.ac.dendai\/2(?<buildingNumber>[01][0-9])(?<floorNumber>[01][0-9])(?<roomNumber>[0-9][0-9])-(?<seatNumber>[^-]+)$/;

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
    return (
      this.senju_regular_expression.test(this.qrData) ||
      this.hatoyama_regular_expression.test(this.qrData)
    );
  }

  /**
   * バリデート済みのデータをパースして適切なオブジェクトで返します
   *
   * @returns Log
   */
  public parseQrData(): ParsedLog {
    const data = this.qrData.match(
      this.getLogCampus() === LogCampus.senju
        ? this.senju_regular_expression
        : this.hatoyama_regular_expression
    ).groups;

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
    if (this.senju_regular_expression.test(this.qrData)) {
      return LogCampus.senju;
    } else if (this.hatoyama_regular_expression.test(this.qrData)) {
      return LogCampus.hatoyama;
    }
  }
}
