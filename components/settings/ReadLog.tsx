import {useRecoilState} from 'recoil';
import {logState} from '../../utils/recoilAtoms';

export const ReadLog = () => {
  const [log, setLog] = useRecoilState(logState);
};
