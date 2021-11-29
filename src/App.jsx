import './App.css';
import { useState,useEffect } from 'react';
import GetDb from './utils/GetDb';
import Lista from './components/Lista';
import useFormData from './hooks/useFormData';
import Post from './utils/Post';
import { EjecutarConsultaContext } from './context/EjecutarConsulta';




function App() {
  const{form, formData, updateFormData}=useFormData()
  const [store,setStore]=useState([])
  const [ejecutarConsulta,setEjecutarConsulta]=useState(true)
  
 
  useEffect(()=>{
      GetDb(setStore,setEjecutarConsulta);
      console.log("consulte")
    
  },[ejecutarConsulta])

  const submitForm = async (e) => {
    e.preventDefault(); 
    Post(formData)
    setEjecutarConsulta(true)
    form.current.reset();

  }

  
  return (
    <EjecutarConsultaContext.Provider value={{ejecutarConsulta,setEjecutarConsulta}}>

      <div className="App">
        <form ref={form} onSubmit={submitForm} onChange={updateFormData}>
          <input type="text" name="name"></input>
          <input type="submit"></input>    
        </form>

        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>Nombre</td>
              <td>Esta Completado?</td>
            </tr>
          </thead>
          <tbody>
        {store.map((dato)=>{
          return(
          <Lista key={dato.id}dato={dato} />
        
          )
        })}
        </tbody>
      </table>

      </div>
    </EjecutarConsultaContext.Provider>
  );
  
}





export default App;
