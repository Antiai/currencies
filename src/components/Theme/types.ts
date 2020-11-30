import { DefaultTheme } from 'styled-components';

import { ISpacings } from '../../const/spacings/types';
import { IGridOutput } from '../Grid/types';
import { PaletteType } from '../Palette/types';
import { ITypography } from '../Typography/types';

export interface ITheme extends DefaultTheme {
  grid: IGridOutput;
  palette: PaletteType;
  typography: ITypography;
  spacings: ISpacings;
}

export interface IStyledComponent {
  theme: ITheme;
}
