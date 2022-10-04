import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Button as AntdButton } from 'antd';

const Button = ({
  icon, size, type, onClick, text, className,
}) => {
  const classnames = classNames(className, 'w-15');
  return (
    <AntdButton type={type} icon={icon} size={size} onClick={onClick} classNames={classnames}>
      {text}
    </AntdButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.element,
  className: PropTypes.string,
};

export default Button;
