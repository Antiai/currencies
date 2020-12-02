import React, {ChangeEvent, FC, FormEvent, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Col} from 'styled-bootstrap-grid';
import {RootState} from '../../config/store';
import {fetchQuotesList} from '../../modules/quotesList';
import {
  Container,
  ResultLabel, ResultValue,
  ResultWrap,
  StyledButton,
  StyledForm,
  StyledFormField,
  StyledRow,
  Title,
} from './styled.index';
import {IConverterFormValues} from './types';

const initialValues: IConverterFormValues = {
  amount: 100,
  firstCurrency: 'USD',
  secondCurrency: 'AUD',
};

const Converter: FC = () => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state: RootState) => state.loading);

  const [formValues, setFormValues] = useState<IConverterFormValues>(initialValues);
  const [exchangeRate, setExchangeRate] = useState<number>(1);
  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    dispatch(fetchQuotesList());
  }, [dispatch]);

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setResult(0);
    const {target: {name, value}} = event;

    setFormValues({...formValues, [name]: value});
  }, [formValues]);

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setResult(formValues.amount as number * exchangeRate);
    console.log('submit');
  }, [exchangeRate, formValues.amount]);

  return (
    <>
      <Title>Конвертация валют</Title>
      <Container>
        <StyledRow>
          <Col>
            <StyledForm onSubmit={handleSubmit}>
              <StyledFormField
                name="amount"
                type="number"
                label="Сумма"
                step={0.01}
                min={0}
                defaultValue={formValues.amount as string}
                disabled={isLoading}
                onChange={handleInputChange}
              />
              <StyledButton type="submit">Рассчитать</StyledButton>
            </StyledForm>
          </Col>
        </StyledRow>
        <StyledRow>
          <Col>
            <ResultWrap>
              {Boolean(result) && (
                <>
                  <ResultLabel>
                    Итого
                  </ResultLabel>
                  <ResultValue>
                    {result}
                  </ResultValue>
                </>
              )}
            </ResultWrap>
          </Col>
        </StyledRow>
      </Container>
    </>
  );
};

export default Converter;
