import React from 'react';
import PropTypes from 'prop-types';

const OverviewCard = ({ title, value }) => (
  <div className="min-w-[150px] h-32 border border-solid rounded p-3">
    <div className="text-xl">{title}</div>
    <div className=" text-[36px]">
      {value}
    </div>
  </div>
);

OverviewCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default OverviewCard;
