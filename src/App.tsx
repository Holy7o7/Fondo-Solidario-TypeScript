import './App.css';
import Barchart from './Charts/Barchart';
import Gauge from './Charts/Gaugechart';
import Linechart from './Charts/Linechart';
function App() {
  return (
    <div>
      <h1 className='headers'>Ejemplos Graficos </h1>
      <div className='parent'>
        <div className='graph'><Barchart/></div>
        <p><input type="reset" className='button' value={"Boton de ejemplo"}/></p>
        
      </div>
      <div className='parent'>
        <div className='graph'><Linechart/></div>
        <input type="button" className='button' value={"Boton de ejemplo"} />
      </div>
      <div className='parent'>
        <div className='graph'> <h4 className='graphTytle'>Grafico Velocimetro de alcance de metas</h4><Gauge/></div>
        <input type="button" className='button' value={"Boton de ejemplo"} />
      </div>      
    </div>
  );
}

export default App;
