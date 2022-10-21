import React from 'react';
import { Dropdown as AntdDropdown, Menu } from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Dropdown = ({
  children, items, placement, overlayClassName, onClick,
}) => {
  const menu = () => (
    <Menu items={items} onClick={({ key }) => onClick(key)} />
  );
  const overlayClassNames = classNames('z-20 w-32', overlayClassName);

  return (
    <AntdDropdown overlay={menu} placement={placement} overlayClassName={overlayClassNames}>
      {children}
    </AntdDropdown>
  );
};

Dropdown.propTypes = {
  children: PropTypes.element,
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]),
  })),
  placement: PropTypes.string,
  overlayClassName: PropTypes.string,
  onClick: PropTypes.func,
};

export default Dropdown;
