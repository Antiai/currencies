import React, {FC, memo} from 'react';
import Input from '../Input';
import Select from '../Select';
import {Root, StyledLabel} from './styled.index';
import {ISelectFieldProps} from './types';

const SelectField = <OptionType extends {
  label: string,
  value: string,
}>({
  id,
  name,
  label,
  className,
  style,
  ...rest
}: ISelectFieldProps<OptionType>) => (
  <Root className={className} style={style}>
    <label>
      <StyledLabel>{label}</StyledLabel>
      <Select id={id} name={name} {...rest} />
    </label>
  </Root>
);

export default memo(SelectField);
