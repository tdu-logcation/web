import {useSetRecoilState} from 'recoil';
import {isCloud} from '../utils/recoilAtoms';
import useGetUserInfo from './useGetUserInfo';

const useLoginUser = () => {
  const setCloud = useSetRecoilState(isCloud);
  const {getUserInfoById} = useGetUserInfo();

  const login = (id: string) => {
    getUserInfoById(id);
    setCloud(true);
  };

  return [login];
};

export default useLoginUser;
