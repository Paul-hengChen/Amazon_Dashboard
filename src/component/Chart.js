import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

Highcharts.theme = {

  title: {
    style: {
      color: '#000',
      font: 'bold 16px "Trebuchet MS", Verdana, sans-serif',
    },
  },

  legend: {
    itemStyle: {
      font: '9pt Trebuchet MS, Verdana, sans-serif',
    },
    itemHoverStyle: {
      color: 'dark',
    },
  },
};
// Apply the theme
Highcharts.setOptions(Highcharts.theme);

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
      labels: {
        rotation: dataset.labels.length > 8 ? -45 : 0,
      },
      crosshair: true,
      title: {
        align: 'high',
        offset: 10,
        text: dataset.xAxisTitle,
        rotation: 0,
        y: 10,
      },
    },

    yAxis: {
      title: {
        align: 'high',
        offset: 10,
        text: dataset.yAxisTitle,
        rotation: 0,
        y: -20,
      },
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
    <div className="border border-solid p-5 mr-2 mb-2 shadow-lg rounded-lg">
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
