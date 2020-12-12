import React from 'react';
import {IColumnType} from '../../components/Table/types';
import {StarIcon} from '../../icons';
import {IQuote} from '../../modules/quotesList/types';
import {formatDate} from '../../utils';
import {IconButton} from './styled.index';

const favoriteColumnWidth = '80px';
const columnWidth = `calc((100% - ${favoriteColumnWidth})/3)`;

export const getColumns: (handleClick: (event: MouseEvent) => void) => IColumnType<IQuote>[] = (handleClick) => [
  {
    title: ' ',
    dataIndex: 'isFavorite',
    width: favoriteColumnWidth,
    render: (value, rowData) => (
      <IconButton
        isFavorite={value}
        data-asset={rowData.asset}
        data-value={value}
        onClick={handleClick}
      >
        <StarIcon />
      </IconButton>
    )
  },
  {
    title: 'Валютная пара',
    dataIndex: 'asset',
    width: columnWidth,
  },
  {
    title: 'Котировка',
    dataIndex: 'quote',
    width: columnWidth,
  },
  {
    title: 'Дата получения',
    dataIndex: 'startDate',
    width: columnWidth,
    render: (value) => formatDate(value as string),
  }
];