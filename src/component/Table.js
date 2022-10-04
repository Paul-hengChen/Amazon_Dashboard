import React from 'react';
import PropTypes from 'prop-types';
import { Table as AntdTable } from 'antd';

const Table = ({ columns, data }) => <AntdTable columns={columns} dataSource={data} />;

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape(PropTypes.any)),
  data: PropTypes.arrayOf(PropTypes.shape(PropTypes.any)),
};

export default Table;
