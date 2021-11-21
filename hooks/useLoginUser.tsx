import {useSetRecoilState} from 'recoil';
import {isCloud, LoadState} from '../utils/recoilAtoms';
import useGetUserInfo from './useGetUserInfo';
import useSync from './useSync';

const useLoginUser = () => {
  const setCloud = useSetRecoilState(isCloud);
  const {getUserInfoById} = useGetUserInfo();
  const setLoad = useSetRecoilState(LoadState);
  const [, sync] = useSync();

  const login = (id: string) => {
    setLoad(true);
    getUserInfoById(id);
    setCloud(true);

    sync(id);
    setLoad(false);
  };

  return [login];
};

export default useLoginUser;
