import React from 'react';
import PropTypes from 'prop-types';
import OverviewCard from './OverviewCard';

const OverviewCardSegment = ({ details }) => (
  <div className="m-3 flex space-x-2">
    {details?.map((detail) => <OverviewCard title={detail.title} value={detail.value} />)}
  </div>
);

OverviewCardSegment.propTypes = {
  details: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string, value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) })),
};

export default OverviewCardSegment;
