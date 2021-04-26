/**
 * ログ定義
 */
export interface Log {
  log: string;
  date: string;
}

export interface ParsedLog {
  buildingNumber: string;
  floorNumber: string;
  roomNumber: string;
  seatNumber: string;
}
