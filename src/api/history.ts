import {IResponseBase} from '../common/types/api';
import {IHistoryRecord} from '../modules/history/types';
import {api} from '../utils';

const getHistory = async (): Promise<IResponseBase & {
  deals: IHistoryRecord[],
}> =>
  api.performRequest({}, 'history');

const historyApi = {
  getHistory,
};

export default historyApi;