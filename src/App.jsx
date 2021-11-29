import './App.css';
import { useState,useEffect } from 'react';
import GetDb from './utils/GetDb';
import Delete from './utils/Delete';
import useFormData from './hooks/useFormData';
import Post from './utils/Post';

function App() {
  const{form, formData, updateFormData}=useFormData()
  const [store,setStore]=useState([])
  const [ejecutarConsulta,setEjecutarConsulta]=useState(true)
 
  useEffect(()=>{
    if(ejecutarConsulta){
      GetDb(setStore,setEjecutarConsulta);
      console.log("consultas")
    }
    
    
  },[ejecutarConsulta])

  const submitForm = async (e) => {
    e.preventDefault(); 
    Post(formData)
    setEjecutarConsulta(true)
    
  }



  
  return (
    <div className="App">

      <form ref={form} onSubmit={submitForm} onChange={updateFormData}>
        <input type="text" name="name"></input>
        <input type="submit"></input>
        
      </form>

      {store.map((dato)=>{
        return(
        <Lista dato={dato} setEjecutarConsulta={setEjecutarConsulta}/>
        )
      })}
      

    </div>
  );
}

const Lista =({dato,setEjecutarConsulta})=>{

  return (
    <div >
          <span>{dato.name}</span>
          <button onClick={()=>{
            Delete(dato.id)
            setEjecutarConsulta(true)
            }}>eliminar</button>
            
      </div>    
    )
}




export default App;
