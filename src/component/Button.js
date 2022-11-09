import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Button as AntdButton } from 'antd';

const Button = ({
  icon, onClick, text, className, ...props
}) => {
  const classnames = classNames(className, 'items-center space-x-2 flex w-15 justify-between');
  return (
    <AntdButton onClick={onClick} {...props}>
      <div className={classnames}>
        {icon && icon}
        {text}
      </div>
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
