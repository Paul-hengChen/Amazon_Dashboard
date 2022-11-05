import React from 'react';
import PropTypes from 'prop-types';
import { Card as AntdCard } from 'antd';

const Card = ({ title, bordered, children }) => (
  <AntdCard title={title} bordered={bordered}>
    {children}
  </AntdCard>
);

Card.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  bordered: PropTypes.bool,
  children: PropTypes.element,
};

export default Card;
