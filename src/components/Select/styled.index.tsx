import {rgba} from 'polished';
import React from 'react';
import {Styles as ReactSelectStyles, components as reactSelectComponents} from 'react-select';
import styled from 'styled-components';
import {ArrowDownIcon} from '../../icons';
import {IStyledTheme} from '../GlobalStyle/types';
import getTheme from '../Theme';

const currentTheme = getTheme();

const StyledArrowDownIcon = styled(ArrowDownIcon)<IStyledTheme>`
  path {
    stroke: ${({theme}) => theme.palette.midnightBlue};
  }
`;

export const customStyles: ReactSelectStyles = {
  indicatorSeparator: () => ({
    display: 'none',
  }),
  container: (provided) => ({
    ...provided,
    font: currentTheme.typography.fonts.desktop.input,
    width: '100%',
  }),
  control: (provided) => ({
    ...provided,
    borderRadius: 5,
    borderColor: currentTheme.palette.midnightBlue,
    outline: 'none',
    cursor: 'pointer',
    '&:hover': {
      borderColor: currentTheme.palette.midnightBlue,
    },
    '&:focus': {
      outline: 'none',
      borderColor: currentTheme.palette.midnightBlue,
    },

  }),
  valueContainer: (provided) => ({
    ...provided,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 11,
  }),
  menu: (provided) => ({
    ...provided,
    top: '79%',

    '&:before': {
      content: '""',
      display: 'block',
      position: 'relative',
      height: 10,
      marginTop: -11,
      marginRight: 1,
      marginLeft: 1,
      backgroundColor: currentTheme.palette.white,
      borderLeft: `1px solid ${currentTheme.palette.white}`,
      borderRight: `1px solid ${currentTheme.palette.white}`,
    }
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: 160,
    border: `1px solid ${currentTheme.palette.midnightBlue}`,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  }),
  option: (provided, state) => ({
    ...provided,
    ...!state?.data?.value ? {display: 'none'} : undefined,
    font: currentTheme.typography.fonts.desktop.input,
    padding: 9,
    color: currentTheme.palette.black,
    opacity: state.isDisabled ? 0.5 : 1,
    backgroundColor: state.isSelected ? rgba(currentTheme.palette.midnightBlue, 0.2) : currentTheme.palette.white,
    cursor: state.isDisabled ? 'not-allowed' : 'pointer',

    '&:hover': {
      ...!state.isDisabled
        ? {backgroundColor: rgba(currentTheme.palette.midnightBlue, 0.2) }
        : undefined,
    }
  }),
  singleValue: (provided, state) => ({
    ...provided,
    opacity: state?.data?.disabled ? 0.5 : 1,
  })
};

export const components: any = {
  DropdownIndicator: (
    props: any,
  ) => (
    <reactSelectComponents.DropdownIndicator {...props}>
      <StyledArrowDownIcon/>
    </reactSelectComponents.DropdownIndicator>
  ),
};