import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


const data = {
  labels,
  datasets: [
    {
      label: "First dataset",
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Second dataset",
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      fill: false,
      borderColor: "#742774"
    }
  ]
};

const Linechart: React.FunctionComponent = () => {
    return( <Line options={options} data={data} />
    );
};

export default Linechart;
