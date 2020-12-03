import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Table} from '../../components';
import {fetchHistory, historySelector} from '../../modules/history';
import {IHistoryRecord} from '../../modules/history/types';
import {loadingSelector} from '../../modules/loading';
import {columns} from './config';
import {TableWrap} from './styled.index';

const History: FC = () => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector(loadingSelector);
  const {pagesMap, totalPages} = useSelector(historySelector);

  const [page, setPage] = useState<number>(1);

  const historyRecords = useMemo(() => pagesMap.get(page), [page, pagesMap]);

  useEffect(() => {
    dispatch(fetchHistory());
  }, [dispatch]);

  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage);
  }, [setPage]);

  return (
    <TableWrap>
      <Table<IHistoryRecord>
        columns={columns}
        rowKey="id"
        data={historyRecords as IHistoryRecord[]}
        isLoading={isLoading}
        withPagination
        page={page}
        totalPages={totalPages}
        onChangePage={handlePageChange}
      />
    </TableWrap>
  );
};

export default History;
