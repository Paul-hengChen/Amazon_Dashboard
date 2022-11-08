import React from 'react';
import PropTypes from 'prop-types';
import { buildOverview } from './schemas';
import { Card } from '../../component';

const OverviewCardSegment = ({ details }) => {
  const content = buildOverview(details);
  return (
    <div className="m-3 flex space-x-4">
      {content?.map(({
        title, key, value, Svg,
      }) => (
        <Card key={key} style={{ 'max-width': '250px', 'border-radius': '16px', 'box-shadow': 'rgba(0, 0, 0, 0.35) 1px 3px 3px' }} bordered>
          <div className="flex">
            <div>
              <div className="text-lg font-medium">{title}</div>
              <p className="text-xl">{value}</p>
            </div>
            <div className="mx-3 self-center text-[24px]">
              <Svg />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

OverviewCardSegment.propTypes = {
  details: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string, value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) })),
};

export default OverviewCardSegment;
