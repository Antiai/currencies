import {NavLink} from 'react-router-dom';
import {media} from 'styled-bootstrap-grid';
import styled from 'styled-components';
import {IStyledTheme} from '../GlobalStyle/types';

export const Root = styled.div`
  ${media.md`
    min-width: 750px;
  `}
`;

export const StyledNavLink = styled(NavLink)<IStyledTheme>`
  font: ${({theme}) => theme.typography.fonts.desktop.tab};
  color: ${({theme}) => theme.palette.midnightBlue};
  text-align: center;
  text-decoration: none;
  display: block;
  margin-right: -1px;
  width: 120px;
  padding-top: 9px;
  padding-bottom: 12px;
  background-color: ${({theme}) => theme.palette.white};
  border: 1px solid ${({theme}) => theme.palette.midnightBlue};
  transition: 
    background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
    
  ${media.md`
    width: 180px;
  `}
    
  &:hover,
  &:focus {
    color: ${({theme}) => theme.palette.white}; 
    background-color: ${({theme}) => theme.palette.persianBlue};
  }
    
  &.active {
    color: ${({theme}) => theme.palette.white}; 
    background-color: ${({theme}) => theme.palette.midnightBlue}; 
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: -1px;
  
  ${StyledNavLink}:first-child {
    border-top-left-radius: 20px;
  }
  
  ${StyledNavLink}:last-child {
    border-top-right-radius: 20px;
  }
`;

export const Container = styled.div<IStyledTheme>`
  min-height: 300px;
  background-color: ${({theme}) => theme.palette.white};
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
`;
