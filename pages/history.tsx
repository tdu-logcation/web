/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
 */
import {Box} from '@chakra-ui/react';
import {useRecoilState} from 'recoil';
import {logState} from '../utils/recoilAtoms';

const History = () => {
  const [log] = useRecoilState(logState);
  return (
    <Box>
      {log.map((log, index) => {
        return (
          <div key={index}>
            {log.date}:{log.log}
          </div>
        );
      })}
    </Box>
  );
};

export default History;
