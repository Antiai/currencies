import {ResponseBase} from '../common/types/api';
import {IQuote} from '../modules/quotesList/types';
import {api} from '../utils';

const getQuotesList = async (): Promise<ResponseBase & {
  assets: IQuote[],
}> =>
  api.performRequest({}, 'quote');

const quotesListApi = {
  getQuotesList,
};

export default quotesListApi;