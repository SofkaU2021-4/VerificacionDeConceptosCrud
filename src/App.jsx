import './App.css';


import { useState } from 'react';
import { EjecutarConsultaContext } from './context/EjecutarConsulta';
import Tabla from './components/Tabla';
import { Formulario } from './components/Formulario';




function App() {
  
  const [ejecutarConsulta,setEjecutarConsulta]=useState(true)
  
  return (
    <EjecutarConsultaContext.Provider value={{ejecutarConsulta,setEjecutarConsulta}}>
      <Formulario/>
      <Tabla/>
    </EjecutarConsultaContext.Provider>
  );
  
}


export default App;
