import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart = ({ title, series }) => {
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
      ...series,
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
  series: PropTypes.object,
};

export default Chart;
