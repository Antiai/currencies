import { PartialBreakpoints } from 'styled-bootstrap-grid';

export type IGridBreakpointsInput = PartialBreakpoints;

export interface IGrid {
  xl: string;
  lg: string;
  md: string;
  sm: string;
  xs: string;
}

export type IGridInput = {
  readonly [K in keyof IGrid]?: IGrid[K]
};

export interface IGridOutput {
  spacings: {
    containers: IGrid,
    row: IGrid,
    col: IGrid,
  };
  breakpoints?: IGridBreakpointsInput;
  row?: {
    padding?: number,
  };
  col?: {
    padding?: number,
  };
  container?: {
    padding?: number,
    maxWidth?: IGridBreakpointsInput,
  };
  gridColumns?: number;
}
