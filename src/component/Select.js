import React from 'react';
import PropTypes from 'prop-types';
import { Select as AntdSelect } from 'antd';

const Select = ({ options = [], ...props }) => (
  <AntdSelect
    showSearch
    optionLabelProp="label"
    filterOption={(input, option) => (option.children).toLowerCase().includes(input.toLowerCase())}
    {...props}
  >
    {!!options?.length && options.map((option) => <AntdSelect.Option value={option.value}>{option.label}</AntdSelect.Option>)}
  </AntdSelect>
);

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]), label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]), key: PropTypes.oneOfType([PropTypes.string, PropTypes.object]) })),
};

export default Select;
