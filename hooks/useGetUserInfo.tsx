import {userInfo} from '../utils/recoilAtoms';
import {useRecoilState, useSetRecoilState} from 'recoil';
import API from '../utils/api';
import {isCloud} from '../utils/recoilAtoms';

const useGetUserInfo = () => {
  const [_userInfo, setUserInfo] = useRecoilState(userInfo);
  const setCloud = useSetRecoilState(isCloud);

  const getUserInfo = () => {
    const api = new API();

    api
      .getUserInfo(_userInfo.id)
      .then(info => {
        setUserInfo(info);

        return info;
      })
      .catch(() => {
        setCloud(false);
        setUserInfo(null);
      });
  };

  const getUserInfoById = (id: string) => {
    const api = new API();

    api
      .getUserInfo(id)
      .then(info => {
        setUserInfo(info);

        return info;
      })
      .catch(() => {
        setCloud(false);
        setUserInfo(null);
      });
  };

  return {getUserInfo: getUserInfo, getUserInfoById: getUserInfoById};
};

export default useGetUserInfo;
