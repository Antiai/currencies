import {ResponseBase} from '../common/types/api';
import {IHistoryRecord} from '../modules/history/types';
import {api} from '../utils';

const getHistory = async (): Promise<ResponseBase & {
  deals: IHistoryRecord[],
}> =>
  api.performRequest({}, 'history');

const historyApi = {
  getHistory,
};

export default historyApi;