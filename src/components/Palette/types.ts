import { basePalette } from '.';

export type PaletteType = typeof basePalette;

export type PaletteInputType = {
  readonly [K in keyof PaletteType]?: PaletteType[K]
};

export type IColor = keyof PaletteType;
