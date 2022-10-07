import React from 'react';
import PropTypes from 'prop-types';

const OverviewCard = ({ title, value }) => (
  <div className="min-w-[180px] h-32 border border-solid rounded p-3">
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

const OverviewCardSegment = ({ details }) => (
  <div className="m-3 p-3 flex space-x-2">
    {details?.map((detail) => <OverviewCard title={detail.title} value={detail.value} />)}
  </div>
);

OverviewCardSegment.propTypes = {
  details: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string, value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) })),
};

export default OverviewCardSegment;
