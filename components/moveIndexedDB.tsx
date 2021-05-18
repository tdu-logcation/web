import React from 'react';
import {useRecoilState} from 'recoil';
import {isMoveIndexedDBState, logState} from '../utils/recoilAtoms';
import {DB} from '../utils/db';

export const MoveIndexedDB = () => {
  const [isMoved, setIsMoved] = useRecoilState(isMoveIndexedDBState);
  const [log] = useRecoilState(logState);

  React.useEffect(() => {
    const f = async () => {
      if (!isMoved) {
        const logs = [...log];
        if (logs.length >= 1) {
          const db: DB = new DB('log');

          await db.openDB();
          await db.addMulti(logs);

          setIsMoved(true);
        }
      }
    };
    f();
  }, []);

  return <></>;
};
