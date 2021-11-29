import './App.css';


import { useState } from 'react';
import { EjecutarConsultaContext } from './context/EjecutarConsulta';
import Tabla from './components/Tabla';
import { FormularioListaTarea } from './components/FormularioListaTarea';




function App() {
  
  const [ejecutarConsulta,setEjecutarConsulta]=useState(true)
  
  return (
    <EjecutarConsultaContext.Provider value={{ejecutarConsulta,setEjecutarConsulta}}>
      <FormularioListaTarea />
      <Tabla/>
    </EjecutarConsultaContext.Provider>
  );
  
}


export default App;
