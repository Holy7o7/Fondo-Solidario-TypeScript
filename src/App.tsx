import './App.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Button} from 'reactstrap';
import Barchart from './Charts/Barchart';
import Gauge from './Charts/Gaugechart';
import Linechart from './Charts/Linechart';

function App() {
  const [show, setShow] = useState(true);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const openCloseDropdown1=()=>{
    setDropdown1(!dropdown1);
  }
  const openCloseDropdown2=()=>{
    setDropdown2(!dropdown2);
  }
  return (
    <div className='containerBody'> 
        <div className='container1'>
          <div className='containerGraphs'>
          {show ?(
            <div className='blockGraphs'>
              <div className='graph'> <Barchart/> </div>
            </div>
          ):(
            <div className='blockGraphs'> 
              <div className='graph'> <Linechart/> </div>
            </div>
          )}
          </div>
          <div className='containerButtoms'>
            <div className= 'dropdown1'> 
            <Dropdown isOpen={dropdown1} toggle={openCloseDropdown1} >
              <DropdownToggle caret className='dropdownStyle'>
                Tipo de Grafico
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={()=>setShow(!show)}>Barras</DropdownItem>
                  <DropdownItem onClick={()=>setShow(!show)}>Lineas</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </div>

            <div className= 'dropdown2'> 
            <Dropdown isOpen={dropdown2} toggle={openCloseDropdown2} >
              <DropdownToggle caret className='dropdownStyle'>
                Periodo
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={()=>setShow(!show)}>Barras</DropdownItem>
                  <DropdownItem onClick={()=>setShow(!show)}>Lineas</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </div>
            <div ><Button className='buttom' color='success' > Graficar </Button></div>
          </div>
        </div>
        <div className='blockGauge'>
          <div className='gauge'> <h4 className='graphTytle'>Grafico Velocimetro de alcance de metas</h4><Gauge/></div>
        </div>
    </div>
  );
}

export default App;
