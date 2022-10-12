import './App.css';
import Barchart from './Charts/Barchart';
import Gauge from './Charts/Gaugechart';
import Linechart from './Charts/Linechart';
function App() {
  return (
    <div>
      <h1> Ejemplos Graficos </h1>
      <Barchart/>
      <Linechart/>
      <Gauge/>
    </div>
  );
}

export default App;
