import { ILineHeights } from './types';

const DESKTOP_LINE_HEIGHTS: ILineHeights = {
  h1: '27.24px',
  button: '21.79px',
  label: '19.07px',
  input: '21.79px',
  tableCell: '24.51px',
  tab: '19.07px',
  tableHeadCell: '21.79px',
  common: '21.79px',
  logo: '32.68px',
  error: '16.34px',
};

const MOBILE_LINE_HEIGHTS: ILineHeights = {
  h1: '21.79px',
  button: '21.79px',
  label: '19.07px',
  input: '21.79px',
  tableCell: '24.51px',
  tab: '19.07px',
  tableHeadCell: '19.07px',
  common: '21.79px',
  logo: '27.24px',
  error: '16.34',
};

const LINE_HEIGHTS = {
  desktop: {
    ...DESKTOP_LINE_HEIGHTS,
  },
  mobile: {
    ...MOBILE_LINE_HEIGHTS,
  },
};

export default LINE_HEIGHTS;
