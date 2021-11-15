import {DB} from '../utils/db';
import {DBLog} from '../@types/log';
import React from 'react';
import {useToast} from '@chakra-ui/react';
import API from '../utils/api';
import {isCloud, userInfo} from '../utils/recoilAtoms';
import {useSetRecoilState} from 'recoil';

const useSync = (): [boolean, (id: string) => void] => {
  const db = new DB('log');
  const [success, setSuccess] = React.useState(false);
  const toast = useToast();
  const api = new API();
  const setCloud = useSetRecoilState(isCloud);
  const setUser = useSetRecoilState(userInfo);

  const _sync = async (id: string) => {
    await db.openDB();

    const cloudLogs = await api.getLogs(id);
    const localLogs = await db.getAll();

    const localNotFoundLogs: DBLog[] = [];
    const cloudNotFoundLogs: DBLog[] = [];

    for (const localElement of localLogs) {
      if (
        !cloudLogs.find(v => v.code === localElement.code) &&
        !cloudLogs.find(v => v.date === localElement.date)
      ) {
        cloudNotFoundLogs.push(localElement);
      }
    }

    for (const cloudElement of cloudLogs) {
      if (
        !localLogs.find(v => v.code === cloudElement.code) &&
        !localLogs.find(v => v.date === cloudElement.date)
      ) {
        localNotFoundLogs.push(cloudElement);
      }
    }

    await db.addMulti(localNotFoundLogs);

    for (const element of cloudNotFoundLogs) {
      await api.addLog(id, element);
    }
  };

  const sync = (id: string) => {
    _sync(id)
      .then(() => {
        setSuccess(true);
      })
      .catch(() => {
        toast({
          title: 'クラウドと同期できませんでした',
          description: '設定を確認してください',
          status: 'error',
        });
      });
  };

  return [success, sync];
};

export default useSync;
