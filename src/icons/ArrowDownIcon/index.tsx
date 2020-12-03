import React, {FC} from 'react';
import {IArrowDownIconProps} from './types';

const ArrowDownIcon: FC<IArrowDownIconProps> = (props) => (
  <svg width="11" height="6" viewBox="0 0 11 6" fill="none" {...props}>
    <path d="M0.5 1L5 4.5L10 1" stroke="#1A237E" strokeLinecap="round"/>
  </svg>
);

export default ArrowDownIcon;
