import './App.css';
import Barchart from './Charts/Barchart';
import Gauge from './Charts/Gaugechart';
import Linechart from './Charts/Linechart';
function App() {
  return (
    <div>
      <h1>                     Ejemplos Graficos </h1>
      <div className='parent'>
        <div className='graph'><Barchart/></div>
      </div>
      <div className='parent'>
        <div className='graph'><Linechart/></div>
      </div>
      <div className='parent'>
        <div className='graph'> <h4>Grafico Velocimetro de alcance de metas</h4><Gauge/></div>
      </div>      
    </div>
  );
}

export default App;
