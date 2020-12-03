import React, {FC, useEffect} from 'react';
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
  const historyRecords = useSelector(historySelector);

  useEffect(() => {
    dispatch(fetchHistory());
  }, [dispatch]);

  return (
    <TableWrap>
      <Table<IHistoryRecord>
        columns={columns}
        data={historyRecords as IHistoryRecord[]}
        isLoading={isLoading}
      />
    </TableWrap>
  );
};

export default History;
