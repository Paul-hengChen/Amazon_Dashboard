import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Title = ({ text, className }) => {
  const classnames = classNames(className, 'self-center text-[36px]');
  return <div className={classnames}>{text}</div>;
};

Title.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default Title;
