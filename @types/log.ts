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
  senju = '千住',
  hatoyama = '鳩山',
}

interface LogBase {
  label: string;
  code: string;
  type: LogType;
  campus: LogCampus;
}

export interface Log extends LogBase {
  date: string;
}

export interface DBLog extends LogBase {
  date: Date;
}
export interface ParsedLog {
  buildingNumber: string;
  floorNumber: string;
  roomNumber: string;
  seatNumber: string;
}
