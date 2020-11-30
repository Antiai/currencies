import { PartialBreakpoints } from 'styled-bootstrap-grid';

import { IGrid, IGridBreakpointsInput, IGridInput, IGridOutput } from './types';

export const baseGridBreakpoints: PartialBreakpoints = {
  xl: 1280,
  lg: 992,
  md: 768,
  sm: 576,
  xs: 575,
};

export const baseGridContainerWidth: PartialBreakpoints = {
  xl: 1440,
  lg: 1280,
  md: 992,
  sm: 768,
  xs: 575,
};

export const baseGridSpacingContainers: IGrid = {
  xl: '20px',
  lg: '20px',
  md: '20px',
  sm: '20px',
  xs: '16px',
};

export const baseGridSpacingRow: IGrid = {
  xl: '-16px',
  lg: '-8px',
  md: '-8px',
  sm: '-4px',
  xs: '-4px',
};

export const baseGridSpacingCol: IGrid = {
  xl: '16px',
  lg: '8px',
  md: '8px',
  sm: '4px',
  xs: '4px',
};

export const createGrid = (
  gridBreakpoints: IGridBreakpointsInput = {},
  gridContainerWidth: IGridBreakpointsInput = {},
  gridSpacingContainers: IGridInput = {},
  gridSpacingRow: IGridInput = {},
  gridSpacingCol: IGridInput = {},
): IGridOutput => ({
  spacings: {
    containers: {
      ...baseGridSpacingContainers,
      ...gridSpacingContainers,
    },
    row: {
      ...baseGridSpacingRow,
      ...gridSpacingRow,
    },
    col: {
      ...baseGridSpacingCol,
      ...gridSpacingCol,
    },
  },
  gridColumns: 12,
  breakpoints: {
    ...baseGridBreakpoints,
    ...gridBreakpoints,
  },
  row: {
    padding: 0,
  },
  col: {
    padding: 0,
  },
  container: {
    padding: 0,
    maxWidth: {
      ...baseGridContainerWidth,
      ...gridContainerWidth,
    },
  },
});
