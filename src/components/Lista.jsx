import { useState } from 'react';
import Update from '../utils/Update'
import Delete from '../utils/Delete';
import { useEjecutarConsulta } from '../context/EjecutarConsulta';


const Lista =({dato})=>{
    const {setEjecutarConsulta}=useEjecutarConsulta()
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
              setEjecutarConsulta(true)}}>Aceptar</button>
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

export default Lista
