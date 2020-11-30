import { IFontSizes } from './types';

const DESKTOP_FONT_SIZES: IFontSizes = {
  h1: '20px',
  button: '16px',
  label: '14px',
  input: '16px',
  tableCell: '20px',
  tab: '14px',
  tableHeadCell: '16px',
  common: '16px',
  logo: '24px',
  error: '12px',
};

const MOBILE_FONT_SIZES: IFontSizes = {
  h1: '16px',
  button: '16px',
  label: '14px',
  input: '16px',
  tableCell: '20px',
  tab: '14px',
  tableHeadCell: '16px',
  common: '16px',
  logo: '20px',
  error: '12px',
};

const FONT_SIZES = {
  desktop: {
    ...DESKTOP_FONT_SIZES,
  },
  mobile: {
    ...MOBILE_FONT_SIZES,
  },
};

export default FONT_SIZES;
