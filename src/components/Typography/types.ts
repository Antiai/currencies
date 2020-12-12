import { IFontFamilies } from '../../common/const/fontFamilies/types';
import { IFontsOutput } from '../../common/const/fonts/types';
import { IFontSizesOutput } from '../../common/const/fontSizes/types';
import { IFontStyles } from '../../common/const/fontStyles/types';
import { IFontWeights } from '../../common/const/fontWeights/types';
import { ILineHeightOutput } from '../../common/const/lineHeights/types';
import { ITypographyVariants } from '../../common/const/typographyVariants/types';

export interface ITypography {
  fonts: IFontsOutput;
  fontFamilies: IFontFamilies;
  fontSizes: IFontSizesOutput;
  fontStyles: IFontStyles;
  fontWeights: IFontWeights;
  lineHeights: ILineHeightOutput;
  variants: ITypographyVariants;
}
