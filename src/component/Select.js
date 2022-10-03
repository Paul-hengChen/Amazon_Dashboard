import React from 'react';
import PropTypes from 'prop-types';
import { Select as AntdSelect } from 'antd';

const Select = ({
  onChange, onSearch, options = [], value, defaultValue,
}) => (
  <AntdSelect
    showSearch
    onChange={onChange}
    onSearch={onSearch}
    optionLabelProp="label"
    value={value}
    defaultValue={defaultValue}
    filterOption={(input, option) => (option.children).toLowerCase().includes(input.toLowerCase())}
    size="small"
    className="w-[120px]"
  >
    {!!options?.length && options.map((option) => <AntdSelect.Option value={option.value}>{option.label}</AntdSelect.Option>)}
  </AntdSelect>
);

Select.propTypes = {
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]), label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]), key: PropTypes.oneOfType([PropTypes.string, PropTypes.object]) })),
};

export default Select;
