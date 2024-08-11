import styled from "styled-components";
import ReactApexChart from 'react-apexcharts';

function ChartDashed({namelineone, namelinetwo, namelinethree, voltage, power, intensity, title, name}) {
  const XAXISRANGE = 20;
  const series = [
      {
        name: namelineone,
        data: intensity,
        color: '#ff4400',
      },
      {
        name: namelinetwo,
        data: voltage,
        color: '#ffdd00',
      },
      {
        name: namelinethree,
        data: power,
        color: '#009dff',
      },
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
      yaxis: [
          {
            max: 80,
          },
          {
            max: 60, 
          },
          {
            max: 120,
          }
        ],
      tooltip: {
        enabled: true,
        x: {
            formatter: function (data) {
              return '#' + data + ' - ' + name;
            }
          },
        y: {
          formatter: function (data, { seriesIndex, dataPointIndex, w }) {
              return "Y: " + data + "<br>" + "Serie: " + w.config.series[seriesIndex].name; // Personaliza el formato de Y según tus necesidades
            }
          }
        },
        legend: {
          show: true,
          position: 'bottom',
          horizontalAlign: 'center',
          onItemClick: {
          toggleDataSeries: true,
        },
      },
  };

  return ( 
    <Graph>
        <ReactApexChart options={options} series={series} title={title} namelineone={namelineone} namelinetwo={namelinetwo} namelinethree={namelinethree} voltage={voltage} power={power} intensity={intensity} type="line" height={420}/>
    </Graph>
  );
}

export default ChartDashed;

const Graph = styled.div`
    margin: 2% 0;
    width: 100%;
    height: 100vh;
`
/*const getNewSeries = (lastDate, range) => {
  // Lógica para obtener nuevos datos de la API
  // Reemplaza esto con la lógica real según tu API
  const newDataPoint = {
    x: new Date().getTime(),
    y: Math.floor(Math.random() * (range.max - range.min + 1)) + range.min
  };

  return [...data, newDataPoint];
};*/