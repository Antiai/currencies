import { ITypographyVariants } from '../typographyVariants/types';

export type ILineHeights = {
  [K in keyof ITypographyVariants]: string
};

export type ILineHeightInput = {
  readonly [K in keyof ILineHeights]?: ILineHeights[K]
};

export type ILineHeightOutput = {
  desktop: ILineHeights,
  mobile: ILineHeights,
};
