import {IQuote} from '../modules/quotesList/types';
import {api} from '../utils';

const getQuotesList = async (): Promise<{
  result: 'ok' | 'error',
  error: string,
  assets: IQuote[],
}> =>
  api.performRequest({}, 'quote');

const quotesListApi = {
  getQuotesList,
};

export default quotesListApi;