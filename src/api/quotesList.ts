import {IResponseBase} from '../common/types/api';
import {IQuote} from '../modules/quotesList/types';
import {api} from '../utils';

const getQuotesList = async (): Promise<IResponseBase & {
  assets: IQuote[],
}> =>
  api.performRequest({}, 'quote');

const quotesListApi = {
  getQuotesList,
};

export default quotesListApi;