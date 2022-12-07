import './App.css';
import Barchart from './Charts/Barchart';
import Gauge from './Charts/Gaugechart';
import Linechart from './Charts/Linechart';
function App() {
  return (
    <div> 
      <div className='blockGraphs'>
        <div className='graph'><Barchart/></div>
      </div>
      <div className='blockGauge'>
        <div className='gauge'> <h4 className='graphTytle'>Grafico Velocimetro de alcance de metas</h4><Gauge/></div>
      </div>
      <div className= 'blockButton'><p><input type="reset" className='button' value={"Boton de ejemplo"}/></p></div>      
    </div>
  );
}

export default App;
