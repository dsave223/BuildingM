import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const XAXISRANGE = 20;

function ChartRealTime ({ title, seriesname, dataserie, name, unit, color}) {

  const series = [
    {
      name: seriesname,
      data: dataserie,
      color: color
    }
  ];

  const options = {
    chart: {
      id: 'realtime',
      height: 350,
      type: 'line',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000
        }
      },
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    
    title: {
      text: title,
      align: 'center'
    },
    markers: {
      size: 0
    },
    xaxis: {
      type: 'time',
      range: XAXISRANGE
    },
    yaxis: {
      max: 40
    },
    legend: {
      show: false
    },
    tooltip: {
      enabled: true,
      x: {
        formatter: function (data) {
          return "#"+ data + " - " + name;
        }
      },
      y: {
        formatter: function (data) {
          return data + unit;
        }
      }
    }
  };

  return (
    <Graph id="chart">
      <ReactApexChart options={options} series={series} title={title} dataserie={dataserie} seriesname={seriesname} name={name} unit={unit} type="line" height={420}/>
    </Graph>
  );
};

export default ChartRealTime;

const Graph = styled.div`
  margin: 2% 0;
  width: 100%;
  height: 100vh;
`