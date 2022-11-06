import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart = ({ title }) => {
  const options = {
    title: {
      text: title,
      style: { fontSize: '24px' },
    },
    credits: {
      enabled: false,
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
      },
    },
    exporting: {
      buttons: {
        contextButton: {
          enabled: true,
        },
      },
    },

    xAxis: {
      accessibility: { rangeDescription: '' },
    },

    yAxis: {
      title: { enabled: false },
    },

    series: [{
      type: 'column',
      name: 'Installation & Developers',
      data: [43934, 48656, 65165, 81827, 112143, 142383,
        171533, 165174, 155157, 161454, 154610],
    }],

  };

  return (
    <div className="border border-solid p-5">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

Chart.propTypes = {
  title: PropTypes.string,
};

export default Chart;
