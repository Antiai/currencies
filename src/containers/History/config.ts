import {IColumnType} from '../../components/Table/types';
import {IHistoryRecord} from '../../modules/history/types';
import {formatDate} from '../../utils';

export const columns: IColumnType<IHistoryRecord>[] = [
  {
    title: 'Актив',
    dataIndex: 'asset',
    width: '18%',
  },
  {
    title: 'Начало',
    dataIndex: 'startDate',
    width: '18%',
    render: (value) => formatDate(value as string, {includeTime: true}),
  },
  {
    title: 'Котировка',
    dataIndex: 'startQuote',
    width: '15.3%',
  },
  {
    title: 'Конец',
    dataIndex: 'finishDate',
    width: '18%',
    render: (value) => formatDate(value as string, {includeTime: true}),
  },
  {
    title: 'Котировка',
    dataIndex: 'finishQuote',
    width: '15.3%',
  },
  {
    title: 'Прибыль',
    dataIndex: 'profit',
    width: '15.3%',
  },
];