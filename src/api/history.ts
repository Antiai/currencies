import {IHistoryRecord} from '../modules/history/types';
import {api} from '../utils';

const getHistory = async (): Promise<{
  result: 'ok' | 'error',
  error: string,
  deals: IHistoryRecord[],
}> =>
  api.performRequest({}, 'history');

const historyApi = {
  getHistory,
};

export default historyApi;