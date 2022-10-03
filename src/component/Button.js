import React from 'react';
import PropTypes from 'prop-types';
import { Button as AntdButton } from 'antd';

const Button = ({
  icon, size, type, onClick, label,
}) => {
  <AntdButton type={type} icon={icon} size={size} onClick={onClick}>
    {label}
  </AntdButton>;
};

Button.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.element,
};

export default Button;
