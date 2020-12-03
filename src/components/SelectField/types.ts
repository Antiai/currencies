import {ISelectProps} from '../Select/types';

export interface ISelectFieldProps<OptionType> extends ISelectProps<OptionType> {
  label?: string;
}