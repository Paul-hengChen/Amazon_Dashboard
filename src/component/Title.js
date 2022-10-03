import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text }) => <div className=" self-center text-xl text-white">{text}</div>;

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
