import {media} from 'styled-bootstrap-grid';
import styled from 'styled-components';
import {FormField} from '../../components';
import {IStyledTheme} from '../../components/GlobalStyle/types';
import ArrowIcon from '../../icons/ArrowIcon';

export const Root = styled.div<IStyledTheme>`
  margin-top: 21px;
  background-color: ${({theme}) => theme.palette.white};
  border-radius: 20px;
  overflow: hidden;
`;

export const Title = styled.div<IStyledTheme>`
  font: ${({theme}) => theme.typography.fonts.mobile.h1};
  color: ${({theme}) => theme.palette.white};
  text-align: center;
  padding: 16px;
  background-color: ${({theme}) => theme.palette.midnightBlue};
  
  ${({theme}) => media.md`
    font: ${theme.typography.fonts.desktop.h1};
  `}
`;

export const StyledForm = styled.form`
  padding: 35px 50px 50px;
  
  ${media.md`
    padding: 70px 115px 100px;
  `}
`;

export const StyledField = styled(FormField)`
  ${media.md`
    min-width: 250px;
  `}
  
`;

export const StyledArrowIcon = styled(ArrowIcon)`
  margin-left: 6px;
`;

export const FormFooter = styled.div`
  position: relative;
  margin-top: 50px;
`;

export const StyledError = styled.div<IStyledTheme>`
  font: ${({theme}) => theme.typography.fonts.desktop.error};
  color: ${({theme}) => theme.palette.persianRed};
  text-align: center;
  position: absolute;
  top: 47px;
  width: 100%;
`;
