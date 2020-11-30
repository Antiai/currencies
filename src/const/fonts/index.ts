import FONT_STYLES from '../fontStyles';
import {IFontStyle} from '../fontStyles/types';
import { IFontWeight } from '../fontWeights/types';
import { ITypographyVariant } from '../typographyVariants/types';
import { IFonts } from './types';

import FONT_FAMILIES from '../fontFamilies';
import FONT_SIZES from '../fontSizes';
import FONT_WEIGHTS from '../fontWeights';
import LINE_HEIGHTS from '../lineHeights';

const getFont = (style: IFontStyle, variant: ITypographyVariant, weight: IFontWeight, platform: 'desktop' | 'mobile') =>
  // eslint-disable-next-line max-len
  `${FONT_WEIGHTS[weight]} ${FONT_STYLES[style]} ${FONT_SIZES[platform][variant]}/${LINE_HEIGHTS[platform][variant]} ${FONT_FAMILIES.openSans}`;

const DESKTOP_FONTS: IFonts = {
  h1: getFont('normal', 'h1', 'normal', 'desktop'),
  button: getFont('normal', 'button', 'normal', 'desktop'),
  label: getFont('normal', 'label', 'normal', 'desktop'),
  input: getFont('normal', 'input', 'normal', 'desktop'),
  tableCell: getFont('normal', 'tableCell', 'normal', 'desktop'),
  tab1: getFont('normal', 'tab1', 'normal', 'desktop'),
  tab2: getFont('normal', 'tab2', 'normal', 'desktop'),
  common: getFont('normal', 'common', 'normal', 'desktop'),
  logo: getFont('italic', 'logo', 'bold', 'desktop'),
  error: getFont('normal', 'error', 'normal', 'desktop'),
};

const MOBILE_FONTS: IFonts = {
  h1: getFont('normal', 'h1', 'normal', 'mobile'),
  button: getFont('normal', 'button', 'normal', 'mobile'),
  label: getFont('normal', 'label', 'normal', 'mobile'),
  input: getFont('normal', 'input', 'normal', 'mobile'),
  tableCell: getFont('normal', 'tableCell', 'normal', 'mobile'),
  tab1: getFont('normal', 'tab1', 'normal', 'mobile'),
  tab2: getFont('normal', 'tab2', 'normal', 'mobile'),
  common: getFont('normal', 'common', 'normal', 'mobile'),
  logo: getFont('italic', 'logo', 'bold', 'mobile'),
  error: getFont('normal', 'error', 'normal', 'mobile'),
};

const FONTS = {
  desktop: {
    ...DESKTOP_FONTS,
  },
  mobile: {
    ...MOBILE_FONTS,
  },
};

export default FONTS;
