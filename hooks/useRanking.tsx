import API from '../utils/api';
import {useToast} from '@chakra-ui/react';
import {Rank} from '../@types/cloud';
import React from 'react';
import {LoadState} from '../utils/recoilAtoms';
import {useSetRecoilState} from 'recoil';

const useRanking = (): [Rank[], () => void] => {
  const toast = useToast();
  const [ranks, setRanks] = React.useState<Rank[]>([]);
  const setLoad = useSetRecoilState(LoadState);

  const ranking = () => {
    setLoad(true);
    const api = new API();
    api
      .rank()
      .then(res => {
        setRanks(res);
        setLoad(false);
      })
      .catch(error => {
        setLoad(false);
        toast({
          title: 'ランキングを取得できませんでした',
          description: (error as ErrorEvent).message,
          status: 'error',
          isClosable: true,
        });
      });
  };

  return [ranks, ranking];
};

export default useRanking;
