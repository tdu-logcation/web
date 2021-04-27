import {TableShow, HistoryTable} from '../@types/historyTable';

export const tableShow: TableShow[] = [
  {
    name: '日時',
    id: HistoryTable.date,
  },
  {
    name: 'キャンパス',
    id: HistoryTable.campus,
  },
  {
    name: '号館',
    id: HistoryTable.building,
  },
  {
    name: '階数',
    id: HistoryTable.floor,
  },
  {
    name: '教室名',
    id: HistoryTable.room,
  },
  {
    name: '座席位置',
    id: HistoryTable.seat,
  },
];
