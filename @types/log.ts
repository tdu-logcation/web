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

export enum LogCampus {
  senju,
  hatoyama,
}

export interface Log {
  code: string;
  date: string;
  type: LogType;
  campus: LogCampus;
}

export interface ParsedLog {
  buildingNumber: string;
  floorNumber: string;
  roomNumber: string;
  seatNumber: string;
}
