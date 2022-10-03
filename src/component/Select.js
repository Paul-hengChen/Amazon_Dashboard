import React from 'react';
import PropTypes from 'prop-types';
import { Select as AntdSelect } from 'antd';

const Select = ({
  onChange, onSearch, options = [], ...props
}) => (
  <AntdSelect
    showSearch
    placeholder="Select a person"
    onChange={onChange}
    onSearch={onSearch}
    optionLabelProp="label"
    filterOption={(input, option) => (option.children).toLowerCase().includes(input.toLowerCase())}
    {...props}
  >
    {!!options?.length && options.map(({ value, label }) => <AntdSelect.Option value={value}>{label}</AntdSelect.Option>)}
  </AntdSelect>
);

Select.propTypes = {
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
};

export default Select;
