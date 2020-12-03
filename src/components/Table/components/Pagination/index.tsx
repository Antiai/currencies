import React, {ChangeEvent, CSSProperties, FC, FormEvent, useCallback, useState} from 'react';
import {ArrowIcon} from '../../../../icons';
import {Root, StyledDelimiter, StyledForm, StyledInput, StyledNextButton, StyledPrevButton} from './styled.index';

interface IPaginationProps {
  page: number;
  totalPages: number;
  isLoading?: boolean;
  className?: string;
  style?: CSSProperties;
  onChangePage: (newPage: number) => void;
}

const Pagination: FC<IPaginationProps> = ({
  page,
  totalPages,
  isLoading,
  onChangePage,
  className,
  style
}) => {
  const [newPage, setNewPage] = useState<number>(page);

  const decrementPage = useCallback(() => {
    const newValue = newPage > 1 ? newPage - 1 : newPage;
    setNewPage(newValue);

    onChangePage(newValue);
  }, [newPage, onChangePage]);

  const incrementPage = useCallback(() => {
    const newValue = newPage < totalPages ? newPage + 1 : newPage;
    setNewPage(newValue);

    onChangePage(newValue);
  }, [newPage, onChangePage, totalPages]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    let newValue = parseInt(`${event.target.value}`);

    if (newValue > totalPages) newValue = totalPages;
    if (newValue < 1) newValue = 1;

    setNewPage(newValue);
  }, [totalPages]);

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onChangePage(newPage);
  }, [newPage, onChangePage]);

  return (
    <Root className={className} style={style}>
      <StyledPrevButton
        onClick={decrementPage}
        disabled={isLoading || newPage === 1}
      >
        <ArrowIcon />
      </StyledPrevButton>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="number"
          min={1}
          max={totalPages}
          step={1}
          value={`${newPage}`}
          onChange={handleChange}
          disabled={isLoading || totalPages === 1}
        />
        <StyledDelimiter>/</StyledDelimiter>
        <span>{totalPages}</span>
      </StyledForm>
      <StyledNextButton
        onClick={incrementPage}
        disabled={isLoading || newPage === totalPages}
      >
        <ArrowIcon />
      </StyledNextButton>
    </Root>
  );
};

export default Pagination;
