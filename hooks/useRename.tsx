import {useRecoilState, useSetRecoilState} from 'recoil';
import {userInfo, isCloud, LoadState} from '../utils/recoilAtoms';
import API from '../utils/api';
import {useToast} from '@chakra-ui/react';
import useGetUserInfo from './useGetUserInfo';

const useRename = () => {
  const [user, setUser] = useRecoilState(userInfo);
  const setCloud = useSetRecoilState(isCloud);
  const setLoad = useSetRecoilState(LoadState);
  const toast = useToast();
  const {getUserInfo} = useGetUserInfo();

  const rename = (name: string) => {
    setLoad(true);
    const api = new API();
    api
      .changeName(user.id, name, () => {
        setUser(null);
        setCloud(false);
      })
      .then(() => {
        getUserInfo();
        setLoad(false);
      })
      .catch(error => {
        toast({
          title: 'ユーザ名を変更できませんでした',
          description: (error as ErrorEvent).message,
          status: 'error',
          isClosable: true,
        });
      });
  };

  return rename;
};

export default useRename;
