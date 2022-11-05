import React from 'react';
import PropTypes from 'prop-types';
import { buildContent } from './schemas';
import { Card } from '../../component';

const OverviewCardSegment = ({ details }) => {
  const content = buildContent(details);
  return (
    <div className="m-3 flex space-x-2">
      {content?.map((detail) => <Card title={detail.title}>{detail.value}</Card>)}
    </div>
  );
};

OverviewCardSegment.propTypes = {
  details: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string, value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) })),
};

export default OverviewCardSegment;
