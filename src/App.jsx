import './App.css';
import { useState,useEffect } from 'react';
import GetDb from './utils/GetDb';
import Delete from './utils/Delete';
import useFormData from './hooks/useFormData';
import Post from './utils/Post';
import Update from './utils/Update';



function App() {
  const{form, formData, updateFormData}=useFormData()
  const [store,setStore]=useState([])
  const [ejecutarConsulta,setEjecutarConsulta]=useState(true)
  
 
  useEffect(()=>{
      GetDb(setStore,setEjecutarConsulta);
    
  },[ejecutarConsulta])

  const submitForm = async (e) => {
    e.preventDefault(); 
    Post(formData)
    setEjecutarConsulta(true)
    form.current.reset();
    
  }




  
  return (
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
        <Lista key={dato.id}dato={dato} setEjecutarConsulta={setEjecutarConsulta}/>
        )
      })}
      </tbody>
    </table>

    </div>
  );
  
}
const Lista =({dato,setEjecutarConsulta})=>{
  const [actualizar,setActualizar]=useState(false)
  const [infoDato, setInfoDato] = useState({
    id: dato.id,
    name: dato.name,
  });
  
  

  return (
    <tr >
          <td>{dato.id}</td>
          {actualizar?
          (<>
          <input defaultValue={dato.name}   type="text" onChange={(e) => {setInfoDato({ ...infoDato, name: e.target.value })}}></input>
          <td>{dato.isCompleted? "SI" : "NO"}</td>
          <button onClick={()=>{
            Update(infoDato)
            setActualizar(false)
            setEjecutarConsulta(true)}}>Actualizar</button>
          <button onClick={()=>{setActualizar(false)}}>Cancelar</button>
          </>)
          :(<>
          <td>{dato.name}</td>
          <td>{dato.isCompleted? "SI" : "NO"}</td>
          <td><button onClick={()=>setActualizar(true)}>Actualizar</button></td>
          <td > <button onClick={()=>{
            Delete(dato.id)
            setEjecutarConsulta(true)
            
            }}>eliminar</button></td>

          </>)}
          
         
            
         
            
      </tr>    
    )
}





export default App;
