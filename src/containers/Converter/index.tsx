import React, {ChangeEvent, FC, FormEvent, useCallback, useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Col} from 'styled-bootstrap-grid';
import {RootState} from '../../config/store';
import {exchangeRatesSelector, fetchQuotesList} from '../../modules/quotesList';
import {
  Container,
  ResultContainer,
  ResultLabel,
  ResultValue,
  ResultWrap,
  StyledButton,
  StyledForm,
  StyledFormField,
  StyledRow,
  StyledSelect,
  Title,
} from './styled.index';
import {IConverterFormValues,} from './types';

const initialValues: IConverterFormValues = {
  amount: 100,
  firstCurrency: '',
  secondCurrency: '',
};

const Converter: FC = () => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state: RootState) => state.loading);
  const {fullCurrenciesList, directRatesMap, reversedRatesMap} = useSelector(exchangeRatesSelector);

  const [formValues, setFormValues] = useState<IConverterFormValues>(initialValues);

  const currencyOptions = useMemo(() => fullCurrenciesList
    .map(currency => ({
      label: currency,
      value: currency,
    })), [fullCurrenciesList]);


  const [result, setResult] = useState<number>(0);

  const secondCurrencyOptions = useMemo(() => {
    const availableOptions = currencyOptions
      .map(option => {
        const rateIsExist = directRatesMap.get(`${formValues.firstCurrency}/${option.value}`) ||
          reversedRatesMap.get(`${formValues.firstCurrency}/${option.value}`);

        return {
          ...option,
          disabled: option.value === formValues.firstCurrency || !rateIsExist
        };
      });
    return [
      {label: '', value: ''},
      ...availableOptions,
    ];
  }, [currencyOptions, directRatesMap, formValues, reversedRatesMap]);

  useEffect(() => {
    dispatch(fetchQuotesList());
  }, [dispatch]);

  const submitIsDisabled = isLoading || Object.values(formValues).some(value => !value);

  const getCurrencyValue = useCallback((name: keyof IConverterFormValues) => (
    name === 'firstCurrency'
      ? currencyOptions
      : secondCurrencyOptions
  )
    .find(option => formValues[name] === option.value),
    [currencyOptions, formValues, secondCurrencyOptions]
  );

  const handleFormChange = useCallback((name, value) => {
    setResult(0);

    let isRequiredResetSecondCurrency = false;
    if (name === 'firstCurrency' && formValues.secondCurrency) isRequiredResetSecondCurrency = true;

    setFormValues({
      ...formValues,
      [name]: value,
      ...isRequiredResetSecondCurrency ? {secondCurrency: ''} : undefined,
    });
  }, [formValues]);

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const {target: {name, value}} = event;

    handleFormChange(name, value);
  }, [handleFormChange]);

  const handleSelectChange = useCallback((selectedOption, {name}) => {
    handleFormChange(name, selectedOption?.value);
  }, [handleFormChange]);

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const rangeKey = [formValues.firstCurrency, formValues.secondCurrency].join('/');
    const directExchangeRate = directRatesMap.get(rangeKey);
    const reversedExchangeRate = reversedRatesMap.get(rangeKey);
    const result = formValues.amount as number * (directExchangeRate ?? reversedExchangeRate ?? 0);
    const roundedResult = Math.round(result * 10000) / 10000;

    setResult(roundedResult);
  },
    [directRatesMap, formValues.amount, formValues.firstCurrency, formValues.secondCurrency, reversedRatesMap]
  );

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
              <StyledSelect
                name="firstCurrency"
                options={currencyOptions}
                value={getCurrencyValue('firstCurrency')}
                isDisabled={isLoading}
                onChange={handleSelectChange}
              />
              <StyledSelect
                name="secondCurrency"
                options={secondCurrencyOptions}
                value={getCurrencyValue('secondCurrency')}
                isDisabled={isLoading}
                onChange={handleSelectChange}
              />
              <StyledButton type="submit" disabled={submitIsDisabled}>Рассчитать</StyledButton>
            </StyledForm>
          </Col>
        </StyledRow>
        <StyledRow>
          <Col>
            <ResultContainer>
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
            </ResultContainer>
          </Col>
        </StyledRow>
      </Container>
    </>
  );
};

export default Converter;
