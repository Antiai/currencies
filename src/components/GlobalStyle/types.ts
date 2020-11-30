import { CSSProp } from 'styled-components';

import { PaletteType } from '../Palette/types';
import { ITheme } from '../Theme/types';

export type StyledCSS = CSSProp | false | undefined;

export type StyledColor = keyof PaletteType;

export interface IStyledTheme {
  theme?: ITheme;
}
