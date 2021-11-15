import {useSetRecoilState} from 'recoil';
import {isCloud} from '../utils/recoilAtoms';
import API from '../utils/api';
import {useToast} from '@chakra-ui/react';
import useGetUserInfo from './useGetUserInfo';

const useCreateUser = () => {
  const setCloud = useSetRecoilState(isCloud);
  const toast = useToast();
  const {getUserInfoById} = useGetUserInfo();

  const create = (userName: string) => {
    const api = new API();
    api
      .createAccount(userName)
      .then(res => {
        getUserInfoById(res);
        setCloud(true);
      })
      .catch(error => {
        toast({
          title: 'アカウントを作成できませんでした',
          description: (error as ErrorEvent).message,
          status: 'error',
          isClosable: true,
        });
      });
  };

  return [create];
};

export default useCreateUser;
