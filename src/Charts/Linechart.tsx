import React, { useRef, useCallback } from 'react';
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


export default function Linechart(periodo:any){
  let labels: string[]= periodo.labels;
  const data = {
    labels,
    datasets: [
      {
        label: "Indicador 1",
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Indicado 2",
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        fill: false,
        borderColor: "#742774"
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Grafico de Lineas Semestre',
      },
    },
  };

  const barRef = useRef(null);

  const downloadPNG =useCallback (() =>{
    let ref: any = "";
    ref = barRef;
    const link = document.createElement("a");
    link.download =  `${periodo.labels[0]} line.png`;
    link.href = ref.current.toBase64Image();
    link.click();
  }, [])

  return(
  <div>
    <Line options={options} data={data} ref={barRef}/>
    <button type="button" onClick={downloadPNG}> Exportar </button>
  </div>);
};
