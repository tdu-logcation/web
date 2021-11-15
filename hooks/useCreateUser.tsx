import {useSetRecoilState} from 'recoil';
import {isCloud, LoadState} from '../utils/recoilAtoms';
import API from '../utils/api';
import {useToast} from '@chakra-ui/react';
import useGetUserInfo from './useGetUserInfo';
import useSync from './useSync';

const useCreateUser = () => {
  const setCloud = useSetRecoilState(isCloud);
  const toast = useToast();
  const {getUserInfoById} = useGetUserInfo();
  const setLoad = useSetRecoilState(LoadState);
  const [, sync] = useSync();

  const create = (userName: string) => {
    setLoad(true);
    const api = new API();
    api.createAccount(userName).then(res => {
      getUserInfoById(res);
      setCloud(true);
      sync(res);
      setLoad(false);
    });
  };

  return [create];
};

export default useCreateUser;
