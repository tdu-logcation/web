import {DBLog} from '../@types/log';
import API from '../utils/api';

const useAddLog = () => {
  const api = new API();

  const addLog = async (log: DBLog, id: string) => {
    api.addLog(id, log);
  };

  const addLogs = async (logs: DBLog[], id: string) => {
    for (const log of logs) {
      await addLog(log, id);
    }
  };

  return {addLog: addLog, addLogs: addLogs};
};

export default useAddLog;
