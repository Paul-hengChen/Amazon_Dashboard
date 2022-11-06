import React from 'react';
import PropTypes from 'prop-types';
import { Card as AntdCard } from 'antd';

const Card = ({
  title, bordered, children, style,
}) => (
  <AntdCard title={title} bordered={bordered} style={style}>
    {children}
  </AntdCard>
);

Card.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  bordered: PropTypes.bool,
  children: PropTypes.element,
  style: PropTypes.object,
};

export default Card;
