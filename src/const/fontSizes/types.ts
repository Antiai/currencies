import { ITypographyVariants } from '../typographyVariants/types';

export type IFontSizes = {
  [K in keyof ITypographyVariants]: string
};

export type IFontSizesOutput = {
  desktop: IFontSizes,
  mobile: IFontSizes,
};
