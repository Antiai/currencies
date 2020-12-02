import {TableHTMLAttributes} from 'react';
import {IStyledTheme} from '../../../GlobalStyle/types';
import {IRecord, ITableProps} from '../../types';

export interface ITableRowProps<RecordType extends IRecord> extends TableHTMLAttributes<HTMLTableRowElement> {
  columns: ITableProps<RecordType>['columns'];
  rowData: RecordType;
  rowKey?: keyof RecordType;
}

export interface IStyledCell extends IStyledTheme {
  width?: string;
}