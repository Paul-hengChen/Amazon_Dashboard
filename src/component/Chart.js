import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart = ({ dataset }) => {
  const options = {
    title: {
      text: dataset.name,
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
        pointWidth: 20,
        color: dataset.color,
      },
      column: {
        pointPadding: 0.2,
        borderWidth: 1,
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
      categories: dataset.labels,
      accessibility: { rangeDescription: '' },
      crosshair: true,
    },

    yAxis: {
      title: { enabled: false },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },

    legend: {
      itemStyle: {
        font: '9pt Trebuchet MS, Verdana, sans-serif',
        color: 'black',
      },
      itemHoverStyle: {
        color: 'gray',
      },
    },

    series: [{ ...dataset }],

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
  dataset: PropTypes.object,
};

export default Chart;
