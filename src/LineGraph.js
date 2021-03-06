import './LineGraph.css';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import numeral from 'numeral';

const buildChartData = (data, casesType) => {
  const chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      }
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  };
  return chartData;
};

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      }
    }
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          parser: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      }
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      }
    ],
  },
}

function LineGraph() {
  
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
    .then(res => res.json())
    .then(data => {
      //console.log(data);
      const chartData = buildChartData(data, 'cases');
      setData(chartData);
    });
  }, []);

  return (
    <div className="linegraph">
      {
        data?.length > 0 && (
          <Line 
          options={options}
          data={
            {
              datasets: [
                {
                  backgroundColor: "rgba(204, 16, 52, 0.5)",
                  borderColor: "#CC1034",
                  data: data
                }
              ]
            }
          } />
        )
      }

    </div>
  )
}

export default LineGraph;
