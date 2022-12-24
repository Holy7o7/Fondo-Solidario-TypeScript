import './App.css';
import React, {useRef, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Button} from 'reactstrap';
import Barchart from './Charts/Barchart';
import Gauge from './Charts/Gaugechart';
import Linechart from './Charts/Linechart';
import Popup from 'reactjs-popup';
import TablaPeriodo from './component/tablePeriodo';
import TablaTipo from './component/tableTipo';
import Select from "react-select";

const semestre1 = ['Enero', 'Febrero', 'Marzo','Abril', 'Mayo', 'Junio'];

const otpT = [
  {value: "barra",label: "Barras"},
  {value: "linea",label: "Lineas"}
];

const otpP = [
  {value: "trimestre",label: "Trimestre"},
  {value: "semestre",label: "Semestre"}
];  

function App(this: any) {
  const [val,setValue] = useState(null);
  const [val1,setValue1] = useState(null);
  const [tablaT, tableTipo] = useState(true);
  const [show, setShow] = useState(true);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const openCloseDropdown1=()=>{
    setDropdown1(!dropdown1);
  }
  const openCloseDropdown2=()=>{
    setDropdown2(!dropdown2);
  }

  const handleSelectChange = (value: any) =>{
    console.log(value);
    setValue(value);
  }

  const handleSelectChange1 = (value: any) =>{
    console.log(value);
    setValue1(value);
  }
  function multT(tipo: any,periodo: any){
    if (Object.values(tipo)[0] == "barra") {
      setShow(true);
    }else{
      setShow(false);
    }
    return(
      console.log(Object.values(tipo)[0],Object.values(periodo)[0])
      
    )
  }

  return (
    <div className='containerBody'>
      <div className='containerGraphs'>
        {show ?(<div className='blockGraphs'>
          <div className='graph'> <Barchart labels={semestre1}/></div>
          </div>
          ):(
          <div className='blockGraphs'>
            <div className='graph'> <Linechart labels={semestre1}/></div>
          </div>
          )}
      </div>
      <div className='containerButtoms'>
        <div className= 'dropdown1'>
          <Select value={val} defaultValue={otpT[0]} options={otpT} onChange={handleSelectChange}/>
        </div>
        <div className= 'dropdown2'> 
          <Select value={val1} defaultValue={otpP[0]} options={otpP} onChange={handleSelectChange1}/>
          </div>

        <div  id='tipe'> <Button className='buttom' color='success' onClick={()=>multT(val,val1)} > Graficar </Button> </div>
      </div>
      <div className='blockGauge'>
          <div className='gauge'> <h4 className='graphTytle'>Grafico Velocimetro de alcance de metas</h4><Gauge/></div>
      </div>
    </div>


      

         

         
          

        

  );
}

export default App;
