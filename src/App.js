import logo from './logo.svg';
import './App.css';
import { C01componente } from './components/C01componente';
import Contador1 from './components/C02componente';
import Contador2 from './components/C03componente';
import Contador3 from './components/C04componente';
import C05operador from './components/C05operador';
import C06matriz from './components/C06matriz';

function App() {
  return (
    <div>
      <h4>Mi primer componente</h4>
      <C01componente/> 
      <hr/>
      <h3>segundo componente</h3> 
      <hr/> 
      <Contador1/>
      <hr/>
      <h2> cuarto componente </h2>
      <hr/>
      <Contador2/>
      <hr/>
      <Contador3/>
      <hr/>
      <hr/>
      <h2> Quinto componente </h2>
      <hr/>
      <C05operador/>
      <hr/>
      <hr/>
      <h1> Sexto componente </h1>
      <hr/>
      <C06matriz/>
  
    </div>
  );
}

export default App;
