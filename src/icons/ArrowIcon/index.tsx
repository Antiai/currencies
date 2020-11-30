import React, {FC, memo} from 'react';
import {IArrowIconProps} from './types';

const ArrowIcon: FC<IArrowIconProps> = (props) => (
  <svg width="19" height="9" viewBox="0 0 19 9" fill="none" {...props}>
    <path d="M1 4.5H18M18 4.5L14.1364 1M18 4.5L14.1364 8" stroke="white" strokeLinecap="round"/>
  </svg>
);

export default memo(ArrowIcon);
