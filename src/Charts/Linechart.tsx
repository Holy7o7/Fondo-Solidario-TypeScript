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

function getMonthName(monthNumber:any) {
  const date = new Date();
  date.setMonth(monthNumber.Mes - 1);
  return date.toLocaleString('es-ES', { month: 'long' });
}

function infor(listaNums:any){
  const lista: number[] = [];
  const largo = listaNums.length;
  for (let x = 0; x < largo; x++)
    lista.push(listaNums[x].valor);
  return lista
}


function parser(data:any){
  const meta = data[0];
  const meses = data[1];
  return [meta,meses]
}

function messs(listaMeses:any){
  const lista: string[] = [];
  const largo = listaMeses.length;
  for (let x = 0; x < largo; x++)
    lista.push(JSON.stringify(getMonthName(listaMeses[x])));
  return lista
  }

function metaInf(met:any,inf:any){
  const lista: number[] = []
  const largo = inf.length;
  for (let x = 0; x < largo; x++)
    lista.push(met);
  return lista
}

export default function Linechart(periodo:any){
  const cos = parser(periodo.labels);
  const meta = periodo.labels[0].cantidad;
  const meses = messs(cos[1])
  const info = infor(cos[1])
  const infoMeta = metaInf(meta,info)

  const data = {
    labels: meses,
    datasets: [{
      data: info,
      label: 'Indicador',
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    },
    {
      data: infoMeta,
      label: 'Meta',
      borderColor: 'rgb(255, 100, 100)',
      fill: false,
    }
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
