import {IRecord} from '../../components/Table/types';

export interface IQuote extends IRecord {
  asset: string;
  date?: string;
  quote?: string;
  isFavorite?: boolean;
}

export interface IQuotesById {
  [key: string]: IQuote;
}

export interface IQuotesListState {
  ids: string[];
  byId: IQuotesById;
  favoriteIds: string[];
  errors?: string | null;
}