import React, {memo, ReactElement, useMemo} from 'react';
import {IRecord} from '../../types';
import {Root, StyledCell} from './styled.index';
import {ITableRowProps} from './types';

const TableRow = <RecordType extends IRecord>({
  columns,
  rowData,
  rowKey,
  ...rest
}: ITableRowProps<RecordType>): ReactElement<ITableRowProps<RecordType>> => {
  const cells = useMemo(() => columns.map(column => {
    const cellValue = rowData[column.dataIndex as string];

    return (
      <StyledCell key={`${rowKey}-${column.dataIndex}`} width={column.width}>
        {column?.render?.(cellValue as RecordType[keyof RecordType], rowData) ?? cellValue as string}
      </StyledCell>
    );
  }), [columns, rowData, rowKey]);

  console.log('render', rowData.asset);
  return (
    <Root {...rest}>
      {cells}
    </Root>
  );
};

export default memo(TableRow);
