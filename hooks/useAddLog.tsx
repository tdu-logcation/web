import {userInfo, isCloud} from '../utils/recoilAtoms';
import {useRecoilState, useSetRecoilState} from 'recoil';
import API from '../utils/api';
import {DBLog} from '../@types/log';
import {useToast} from '@chakra-ui/react';

const useAddLog = () => {
  const [user, setUser] = useRecoilState(userInfo);
  const setCloud = useSetRecoilState(isCloud);
  const toast = useToast();

  const add = (logs: DBLog[]) => {
    const api = new API();
    api
      .addLog(user.id, logs, () => {
        setUser(null);
        setCloud(false);
      })
      .catch(error => {
        toast({
          title: 'ログをクラウドに追加できませんでした',
          description: (error as ErrorEvent).message,
          status: 'error',
          isClosable: true,
        });
      });
  };

  return add;
};

export default useAddLog;
