import {Link} from 'react-router-dom';
import {media} from 'styled-bootstrap-grid';
import styled from 'styled-components';
import {IStyledTheme} from '../GlobalStyle/types';
import {Button} from '..';

export const Root = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  
  ${media.md`
    padding: 42px;
  `}
`;

export const Logo = styled(Link)<IStyledTheme>`
  font: ${({theme}) => theme.typography.fonts.mobile.logo};
  color: ${({theme}) => theme.palette.black};
  text-decoration: none;
  margin-right: auto;
  
  ${({theme}) => media.md`
    font: ${theme.typography.fonts.desktop.logo};
    margin-left: 22px;
  `}
`;

export const StyledButton = styled(Button)`
  max-width: 130px;
`;
