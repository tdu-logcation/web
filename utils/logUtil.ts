import {Log} from '../@types/log';

/**
 * 読み取ったデータをバリデートします
 *
 * @param qrData QRコードのデータ
 * @returns 正しいデータか否か
 */
export function validateQrData(qrData: string): boolean {
  console.log(qrData);
  if (!/^jp.ac.dendai\/(20)?([1-9])([01]?[0-9])([0-9][0-9])-.+$/.test(qrData)) {
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
export function parseQrData(qrData: string): Log {
  const isHatoyama = () => {
    if (qrData.slice(0, 2) === '20' && qrData.length > 5) {
      return true;
    }
    return false;
  };

  /**
   * true: 2ケタの階
   * false: 1ケタの階
   */
  const isHeight = () => {
    const index = qrData.indexOf('-');
    const length = qrData.slice(0, index).length;

    if (isHatoyama()) {
      if (length === 6) {
        return false;
      }
      return true;
    }

    if (length === 4) {
      return false;
    }
    return true;
  };

  const buildingNumber = () => {
    if (isHatoyama()) {
      return qrData.slice(2, 3);
    }
    return qrData.slice(0, 1);
  };

  const floorNumber = () => {
    if (isHatoyama()) {
      if (isHeight()) {
        return qrData.slice(3, 5);
      }
      return qrData.slice(3, 4);
    }

    if (isHeight()) {
      return qrData.slice(1, 3);
    }
    return qrData.slice(1, 2);
  };

  const roomNumber = () => {
    const index = qrData.indexOf('-');
    return qrData.slice(index - 2, index);
  };

  const seatNumber = () => {
    const index = qrData.indexOf('-');
    return qrData.slice(index + 1);
  };

  return {
    buildingNumber: buildingNumber(),
    floorNumber: floorNumber(),
    roomNumber: roomNumber(),
    seatNumber: seatNumber(),
    stayingTime: new Date().toLocaleString('ja-JP'),
  };
}
