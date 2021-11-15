import {DBLog} from '../@types/log';
import API from '../utils/api';

const useGetLog = () => {
  const api = new API();

  const getLog = async (id: string): Promise<DBLog[]> => {
    const contents = await api.getLogs(id);

    return contents;
  };

  return getLog;
};

export default useGetLog;
