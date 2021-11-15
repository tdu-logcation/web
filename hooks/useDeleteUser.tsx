import {useSetRecoilState, useRecoilState} from 'recoil';
import {userInfo, isCloud} from '../utils/recoilAtoms';
import API from '../utils/api';
import {useToast} from '@chakra-ui/react';

const useDeleteUser = () => {
  const [_userInfo, setUserInfo] = useRecoilState(userInfo);
  const setCloud = useSetRecoilState(isCloud);
  const toast = useToast();

  const logout = () => {
    const api = new API();

    api
      .deleteUser(_userInfo.id)
      .then(() => {
        setUserInfo(null);
        setCloud(false);
      })
      .catch(error => {
        toast({
          title: 'ログアウトできませんでした',
          description: (error as ErrorEvent).message,
          status: 'error',
          isClosable: true,
        });
      });
  };

  return [logout];
};

export default useDeleteUser;
