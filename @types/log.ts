/**!
 *
 * Copyright (C) 2021 logcation
 */

/**
 * ログ定義
 */
export enum LogType {
  normal,
}

export interface Log {
  log: string;
  date: string;
  type: LogType;
}

export interface ParsedLog {
  buildingNumber: string;
  floorNumber: string;
  roomNumber: string;
  seatNumber: string;
}
