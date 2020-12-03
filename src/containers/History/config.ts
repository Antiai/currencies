import {IColumnType} from '../../components/Table/types';
import {IHistoryRecord} from '../../modules/history/types';

export const columns: IColumnType<IHistoryRecord>[] = [
  {
    title: 'Актив',
    dataIndex: 'asset',
    width: '18%',
  },
  {
    title: 'Начало',
    dataIndex: 'startDate',
    width: '16.6%',
  },
  {
    title: 'Котировка',
    dataIndex: 'startQuote',
    width: '16.6%',
  },
  {
    title: 'Конец',
    dataIndex: 'finishDate',
    width: '16.6%',
  },
  {
    title: 'Котировка',
    dataIndex: 'finishQuote',
    width: '16.6%',
  },
  {
    title: 'Прибыль',
    dataIndex: 'profit',
    width: '16.6%',
  },
];