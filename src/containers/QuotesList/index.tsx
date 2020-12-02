import React, {FC, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Table} from '../../components';
import {loadingSelector} from '../../modules/loading';
import {fetchQuotesList, quotesListSelector, addToFavorites, removeFromFavorites} from '../../modules/quotesList';
import {IQuote} from '../../modules/quotesList/types';
import {getColumns} from './config';
import {TableWrap} from './styled.index';

const QuotesList: FC = () => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector(loadingSelector);
  const quotesList = useSelector(quotesListSelector);

  useEffect(() => {
    dispatch(fetchQuotesList());
  }, [dispatch]);

  const handleCLick = useCallback((event) => {
    const {currentTarget: {dataset: {asset, value}}} = event;
    dispatch(value === 'true' ? removeFromFavorites(asset) : addToFavorites(asset));
  }, [dispatch]);

  return (
    <TableWrap>
      <Table<IQuote>
        columns={getColumns(handleCLick)}
        data={quotesList as IQuote[]}
        isLoading={isLoading}
      />
    </TableWrap>
  );
};

export default QuotesList;
