import React, { useRef, useCallback } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Chart,
} from 'chart.js';
import { Bar  } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export default function Barchart(periodo:any){
  let labels: string[]= periodo.labels;
  const data = {
    labels,
    datasets: [
      {
        label: 'Indicador 1',
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        backgroundColor: 'rgba(138, 43, 226, 0.5)',
      },
      {
        label: 'Indicador 2',
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Grafico de Barras Trimestral',
      },
    },
  };

    const barRef = useRef(null);


    const downloadPNG =useCallback (() =>{
      let ref: any = "";
      ref = barRef;
      const link = document.createElement("a");
      link.download =  `${periodo.labels[0]} bar.png`;
      link.href = ref.current.toBase64Image();
      link.click();
    }, [])

    return(
    <div>
      <Bar options={options} data={data} ref={barRef}/>
      <button type="button" onClick={downloadPNG}> Exportar </button>
    </div>);
};


