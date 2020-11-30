import { ITheme } from './types';

import { SPACINGS } from '../../const';
import { createGrid } from '../Grid';
import { basePalette } from '../Palette';
import typography from '../Typography';

export const getTheme = (): ITheme => {
  const palette = { ...basePalette };
  const grid = createGrid();
  const spacings = { ...SPACINGS };

  return {
    grid,
    palette,
    typography,
    spacings,
  };
};

export default getTheme;
