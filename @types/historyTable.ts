/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */

export interface TableData {
  date: string;
  building: number;
  floor: number;
  room: string;
  seat: string;
  campus: string;
}

export enum HistoryTable {
  date = 'date',
  building = 'building',
  floor = 'floor',
  room = 'room',
  seat = 'seat',
  campus = 'campus',
}

export interface TableShow {
  name: string;
  id: HistoryTable;
}
