import {useSetRecoilState} from 'recoil';
import {userInfo, isCloud} from '../utils/recoilAtoms';
import API from '../utils/api';
import {useToast} from '@chakra-ui/react';

const useLoginUser = () => {
  const setUserInfo = useSetRecoilState(userInfo);
  const setCloud = useSetRecoilState(isCloud);
  const toast = useToast();

  const login = (id: string) => {
    const api = new API();
    api
      .getUserInfo(id)
      .then(info => {
        setUserInfo({
          name: info.name,
          id: info.id,
        });
        setCloud(true);
      })
      .catch(error => {
        toast({
          title: 'ログインできませんでした',
          description: (error as ErrorEvent).message,
          status: 'error',
          isClosable: true,
        });
      });
  };

  return [login];
};

export default useLoginUser;
