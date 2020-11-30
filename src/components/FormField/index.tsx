import React, {FC, memo} from 'react';
import Input from '../Input';
import {Root, StyledLabel} from './styled.index';
import {IFormFieldProps} from './types';

const FormField: FC<IFormFieldProps> = ({id, name, label, className, style, ...rest}) => {

  return (
    <Root className={className} style={style}>
      <label>
        <StyledLabel>{label}</StyledLabel>
        <Input id={id} name={name} {...rest} />
      </label>
    </Root>
  );
};

export default memo(FormField);
