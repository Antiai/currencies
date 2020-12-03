import {IRecord} from '../../components/Table/types';

export interface IHistoryRecord extends IRecord {
  id: string;
  asset: string;
  startQuote?: string;
  startDate?: string;
  finishQuote?: string;
  finishDate?: string;
  date?: string;
  profit?: string;
}

export interface IHistoryRecordById {
  [key: string]: IHistoryRecord;
}

export interface IHistoryState {
  ids: string[];
  byId: IHistoryRecordById;
  errors?: string | null;
}