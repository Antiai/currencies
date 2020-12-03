import {ReactNode, TableHTMLAttributes} from 'react';
import {IStyledTheme} from '../GlobalStyle/types';

export interface IColumnType<RecordType extends IRecord> {
  title?: ReactNode;
  dataIndex?: keyof RecordType;
  width?: string;
  render?: (value: RecordType[keyof RecordType], rowData: RecordType) => ReactNode;
}

export interface IRecord {
  [key: string]: unknown;
}

export interface ITableProps<
  RecordType extends IRecord
> extends TableHTMLAttributes<HTMLTableElement> {
  columns: IColumnType<RecordType>[];
  data?: RecordType[];
  rowKey?: keyof RecordType;
  isLoading?: boolean;
  withPagination?: boolean;
}

export interface IStyledHeaderCell extends IStyledTheme {
  width?: string;
}
