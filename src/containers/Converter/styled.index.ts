import {Row} from 'styled-bootstrap-grid';
import styled from 'styled-components';
import {Button, FormField, Select} from '../../components';
import {IStyledTheme} from '../../components/GlobalStyle/types';

export const Title = styled.div<IStyledTheme>`
  font: ${({theme}) => theme.typography.fonts.desktop.tableHeadCell};
  color: ${({theme}) => theme.palette.white};
  text-align: center;
  padding-top: 17px;
  padding-bottom: 21px;
  background-color: ${({theme}) => theme.palette.midnightBlue};
`;

export const Container = styled.div`
  height: 300px;
`;

export const StyledRow = styled(Row)`
  height: 50%;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-top: 39px;
  margin-right: auto;
  margin-left: auto;
  max-width: 435px;
`;

export const StyledFormField = styled(FormField)`
  max-width: 80px;
  margin-bottom: 0;
  margin-right: 20px;
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  input {
    -moz-appearance: textfield;
  }
`;

export const StyledButton = styled(Button)`
  max-width: 150px;
  margin-left: 15px;
`;

export const ResultContainer = styled.div<IStyledTheme>`
  margin-right: 10px;
  margin-left: 10px;
  height: 100%;
  border-top: 1px solid ${({theme}) => theme.palette.gainsboro};
`;

export const ResultWrap = styled.div`
  margin-top: 25px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 10px;
  max-width: 435px;
`;

export const ResultLabel = styled.div<IStyledTheme>`
  font: ${({theme}) => theme.typography.fonts.desktop.label};
  color: ${({theme}) => theme.palette.black};
`;

export const ResultValue = styled.div<IStyledTheme>`
  font-family: ${({theme}) => theme.typography.fontFamilies.openSans};
  font-size: 20px;
  font-weight: ${({theme}) => theme.typography.fontWeights.normal};
  line-height: 27.24px;
  color: ${({theme}) => theme.palette.black};
`;

export const StyledSelect = styled(Select)`
  max-width: 80px;
  margin-right: 5px;
`;
