import './App.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Col, Row, Input} from 'reactstrap';
import Barchart from './Charts/Barchart';
import moment from 'moment';
import Gauge from './Charts/Gaugechart';
import Linechart from './Charts/Linechart';
import Select from "react-select";
import axios from 'axios';
import swal from 'sweetalert2'
import { parse } from 'path';

const semestre = ['Enero', 'Febrero', 'Marzo','Abril', 'Mayo', 'Junio'];

const dataExp = [
  [{"cantidad":40}],
  [
    {"Mes":1,"valor":1},
    {"Mes":2,"valor":4},
    {"Mes":3,"valor":1},
    {"Mes":4,"valor":2},
    {"Mes":5,"valor":1},
    {"Mes":6,"valor":3}
  ]]

const otpT = [
  {value: "barra",label: "Barras"},
  {value: "linea",label: "Lineas"}
];

const otpP = [
  {value: "trimestre",label: "Trimestre"},
  {value: "semestre",label: "Semestre"}
];  

const otpI = [
  {value: "indicador1",label: "Indicador1"},
  {value: "indicador2",label: "Indicador2"},
  {value: "indicador3",label: "Indicador3"}
];

function App(this: any) {

  const [val,setValue] = useState(otpT[0]);
  const [val1,setValue1] = useState(otpP[0]);
  const [val2,setValue2] = useState(otpI[0]);
  const [semestre1,setSemestre1] = useState(semestre);
  const [val3, setValue3]= useState(moment().locale('es').format('DD-MM-YYYY'))
  const [show, setShow] = useState(true);
  const [code,setCode] = useState("");



  function parser(data:any){
    const meta = data[0][0];
    const mes = data[1];
    console.log();
    return [meta,mes]
  }

  const handleSelectChange = (value: any) =>{
    console.log(value);
    setValue(value);
  }

  const handleSelectChange1 = (value: any) =>{
    console.log(value);
    setValue1(value);
  }

  const handleSelectChange2 = (value: any) =>{
    console.log(value);
    setValue2(value);
  }

  const handleSelectChange3 = (val: any) =>{
    console.log(val.target.value);

    setValue3(val.target.value);

  }

  function llamado(f1:any,codigo:string){
    const response: object[] = [];
    axios.get('http://localhost:4001/anio='+f1+'/'+codigo)
    .then((res) => {
      return res
    }).catch((err) => {
      return "error"
  });
  }

  function multT(tipo: any,periodo: any,indicador: any,fecha:any){
    var c = "M25";
    if (Object.values(tipo)[0] === "barra") {
      setShow(true);
    }else{
      setShow(false);
    }

    if ("indicador1" == val2.value){
      c = "M25"

    }else if ("indicador2" == val2.value){
      c = "M26"

    }else if ("indicador3" == val2.value){
      c = "M27"

    }

    var data = llamado(val3,c);
    //const coj = parser(dataExp);
    const coj = parser(dataExp);
    setSemestre1(coj);
    console.log(typeof(semestre))
    return coj
  }

  return (
    <Container fluid >
    <Row>
    <Col sm={8}>
    
      <div className='container1'>
          {show ?(<div className='graph'> <Barchart labels={semestre1}/></div>
            ):(
              <div className='graph'> <Linechart labels={semestre1}/></div>

            )}
          <div className='containerButtoms'>
            <div className= 'dropdown1' >
              <Select value={val} defaultValue={otpT[0]} options={otpT} onChange={handleSelectChange}/>
            </div>
            <div className= 'dropdown1'> 
              <Select value={val1} defaultValue={otpP[0]} options={otpP} onChange={handleSelectChange1}/>
            </div>
            <div className= 'dropdown1'> 
              <Select value={val2} defaultValue={otpI[0]} options={otpI} onChange={handleSelectChange2}/>
            </div>
            <div className= 'dropdown1' > 
              <Input type="date" value={val3} onChange={handleSelectChange3}/> 
            </div>
            <div className= 'boton' > <Button color='success' onClick={()=>multT(val,val1,val2,val3)} > Graficar </Button> </div>
          </div>
        </div>
    </Col>
    <Col sm={4}>
      <div className='container2'>
          <div> 
            <h4 className='graphTytle'>Grafico Velocimetro de alcance de metas</h4>
            <Gauge/>
          </div>
        </div>
    </Col>
    </Row>
  </Container>
);
}

export default App;
