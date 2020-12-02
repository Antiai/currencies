import React from 'react';
import {IColumnType} from '../../components/Table/types';
import {StarIcon} from '../../icons';
import {IQuote} from '../../modules/quotesList/types';
import {IconButton} from './styled.index';

export const getColumns: (handleClick: (event: MouseEvent) => void) => IColumnType<IQuote>[] = (handleClick) => [
  {
    dataIndex: 'isFavorite',
    width: '80px',
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
    width: '33%',
  },
  {
    title: 'Котировка',
    dataIndex: 'quote',
    width: '33%',
  },
  {
    title: 'Дата получения',
    dataIndex: 'startDate',
    width: '33%',
  }
];