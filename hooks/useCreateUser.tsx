import {useSetRecoilState} from 'recoil';
import {userInfo, isCloud} from '../utils/recoilAtoms';
import API from '../utils/api';
import {useToast} from '@chakra-ui/react';

const useCreateUser = () => {
  const setUserInfo = useSetRecoilState(userInfo);
  const setCloud = useSetRecoilState(isCloud);
  const toast = useToast();

  const create = (userName: string) => {
    const api = new API();
    api
      .createAccount(userName)
      .then(res => {
        setUserInfo({
          name: userName,
          id: res,
        });
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
