import React, {ReactElement, useMemo} from 'react';
import Skeleton from 'react-loading-skeleton';
import Pagination from './components/Pagination';
import TableRow from './components/TableRow';
import {
  Root,
  SkeletonCell,
  SkeletonRow,
  StyledBody,
  StyledHead,
  StyledHeaderCell,
  StyledTable
} from './styled.index';
import {IRecord, ITableProps} from './types';

const Table = <RecordType extends IRecord>({
  columns,
  data,
  rowKey,
  isLoading,
  withPagination,
  ...rest
}: ITableProps<RecordType>): ReactElement<ITableProps<RecordType>> => {
  const headerCells = useMemo(() => columns.map((column, index) => (
    <StyledHeaderCell
      key={column.dataIndex as string ?? index}
      width={column.width}
    >
      {column.title}
    </StyledHeaderCell>
  )), [columns]);

  const rows = useMemo(
    () => (data ?? [])
      .map((rowData, index) => {
        const processedRowKey = rowKey as string || 'asset';

        return (
          <TableRow
            key={rowData[processedRowKey] as string ?? index}
            rowData={rowData}
            rowKey={processedRowKey}
            columns={columns as IRecord[]}
          />
        );
      }  ), [columns, data, rowKey]);

  return (
    <Root>
      <StyledTable {...rest}>
        <StyledHead>
          <tr>
            {headerCells}
          </tr>
        </StyledHead>
        <StyledBody>
          {isLoading
            ? (
              <SkeletonRow>
                <SkeletonCell colSpan={columns.length}>
                  <Skeleton height={58} count={10} />
                </SkeletonCell>
              </SkeletonRow>
            )
            : rows}
        </StyledBody>
      </StyledTable>
      {withPagination && (
        <Pagination page={1} totalPages={10} onChangePage={(page) => console.log(page)} />
      )}
    </Root>
  );
};

Table.defaultProps = {
  withPagination: false,
};

export default Table;
