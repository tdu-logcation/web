import {useSetRecoilState, useRecoilState} from 'recoil';
import {userInfo, isCloud, LoadState} from '../utils/recoilAtoms';
import API from '../utils/api';
import {useToast} from '@chakra-ui/react';

const useDeleteUser = () => {
  const [_userInfo, setUserInfo] = useRecoilState(userInfo);
  const setCloud = useSetRecoilState(isCloud);
  const toast = useToast();
  const setLoad = useSetRecoilState(LoadState);

  const logout = () => {
    setLoad(true);
    const api = new API();

    api
      .deleteUser(_userInfo.id)
      .then(() => {
        setUserInfo(null);
        setCloud(false);
        setLoad(false);
      })
      .catch(error => {
        setLoad(false);
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
