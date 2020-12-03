import React, {useCallback} from 'react';
import ReactSelect from 'react-select';
import {components, customStyles} from './styled.index';
import {ISelectProps} from './types';

const Select = <OptionType extends {
  label: string,
  value: string,
}>({...rest}: ISelectProps<OptionType>) => {
  const ensureOptionIsDisabled = useCallback((option) => option.disabled, []);

  return (
    <ReactSelect
      styles={customStyles}
      components={components}
      isSearchable={false}
      isOptionDisabled={ensureOptionIsDisabled}
      {...rest}
    />
  );
};

Select.defaultProps = {
  placeholder: '',
};

export default Select;
