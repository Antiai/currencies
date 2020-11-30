import React, {FC, memo} from 'react';
import {StyledInput} from './styled.index';
import {IInputProps} from './types';

const Input: FC<IInputProps> = ({error, ...rest}) => (
  <StyledInput error={Boolean(error)} {...rest} />
);

export default memo(Input);
