import { ITypographyVariants } from '../typographyVariants/types';

export type IFonts = {
  [K in keyof ITypographyVariants]: string
};

export type IFontsOutput = {
  desktop: IFonts,
  mobile: IFonts,
};
