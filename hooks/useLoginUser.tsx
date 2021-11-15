import {useSetRecoilState} from 'recoil';
import {isCloud, LoadState} from '../utils/recoilAtoms';
import useGetUserInfo from './useGetUserInfo';

const useLoginUser = () => {
  const setCloud = useSetRecoilState(isCloud);
  const {getUserInfoById} = useGetUserInfo();
  const setLoad = useSetRecoilState(LoadState);

  const login = (id: string) => {
    setLoad(true);
    getUserInfoById(id);
    setCloud(true);
    setLoad(false);
  };

  return [login];
};

export default useLoginUser;
