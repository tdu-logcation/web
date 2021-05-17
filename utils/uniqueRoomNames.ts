export interface UniqueRoomNames {
  [roomNumber: string]: string;
}

/**
 * 部屋番号変換
 * TODO: 足りない部屋番号追加
 */
export const uniqueRoomNames: UniqueRoomNames = {
  '1201': '丹羽ホール',
  '2305': '学生厚生',
};
