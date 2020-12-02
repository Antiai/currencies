import {CSSProperties} from 'react';
import {NavLinkProps} from 'react-router-dom';

export interface INavTabsItem extends Omit<NavLinkProps, 'id' | 'children'> {
  id: string | number;
  label: string;
  children?: never;
}

export interface INavTabsProps {
  tabs: INavTabsItem[];
  className?: string;
  style?: CSSProperties;
}