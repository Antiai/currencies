import React, {FC} from 'react';
import {StyledButton} from './styled.index';
import {ButtonSizesEnum, ButtonVariantsEnum, IButtonProps} from './types';

const Button: FC<IButtonProps> = ({children, ...rest}) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

Button.defaultProps = {
  variant: ButtonVariantsEnum.filled,
  size: ButtonSizesEnum.medium,
};

export default Button;
