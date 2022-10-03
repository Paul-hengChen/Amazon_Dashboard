import React from 'react';
import { Select as AntdSelect } from 'antd';

const { Option } = AntdSelect;

const Select = (onChange, onSearch) => (
  <AntdSelect
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) => (option.children).toLowerCase().includes(input.toLowerCase())}
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </AntdSelect>
);

export default Select;
