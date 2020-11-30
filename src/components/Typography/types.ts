import { IFontFamilies } from '../../const/fontFamilies/types';
import { IFontsOutput } from '../../const/fonts/types';
import { IFontSizesOutput } from '../../const/fontSizes/types';
import { IFontStyles } from '../../const/fontStyles/types';
import { IFontWeights } from '../../const/fontWeights/types';
import { ILineHeightOutput } from '../../const/lineHeights/types';
import { ITypographyVariants } from '../../const/typographyVariants/types';

export interface ITypography {
  fonts: IFontsOutput;
  fontFamilies: IFontFamilies;
  fontSizes: IFontSizesOutput;
  fontStyles: IFontStyles;
  fontWeights: IFontWeights;
  lineHeights: ILineHeightOutput;
  variants: ITypographyVariants;
}
