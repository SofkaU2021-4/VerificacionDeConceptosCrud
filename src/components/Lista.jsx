import { useState } from 'react';
import {Update,Check} from '../utils/Update'
import Delete from '../utils/Delete';
import { useEjecutarConsulta } from '../context/EjecutarConsulta';


const Lista =({dato})=>{
    const {setEjecutarConsulta}=useEjecutarConsulta()
    const [actualizar,setActualizar]=useState(false)
    const [edit,setEdit]=useState('')
    const [infoDato, setInfoDato] = useState({
      id: dato.id,
      name: dato.name,
    });
    
    
    return (
      <tbody className = "tbody-border text-sm text-gray-400">  
        <tr >
              <td >{dato.id}</td>
              {actualizar?
              (<>
              <input className="border-4" defaultValue={dato.name}   type="text" onChange={(e) => {setInfoDato({ ...infoDato, name: e.target.value })}}></input>
              <td>{dato.completed? "SI" : "NO"}</td>
              <td className = "flex justify-center items-center space-x-2">
                <i onClick={()=>{
                Update(infoDato)
                setActualizar(false)
                setEjecutarConsulta(true)}} className = "fas fa-check my-1 p-1 text-gray-400 hover:text-green-400 cursor-pointer"/>
                <i onClick={()=>{setActualizar(false)}} className = "fas fa-times-circle my-1 p-1 text-gray-400 hover:text-red-400 cursor-pointer"/>
            </td>
              </>):(<>
              <td>{dato.name}</td>
              <td>{dato.completed?"SI" : "NO"}</td>

              <td className = "flex justify-center items-center space-x-2">
                <i onClick={()=>{
                Check(dato.id)
                setEjecutarConsulta(true)
                setEdit("hidden")}} className = "fas fa-check my-1 p-1 text-gray-400 hover:text-green-400 cursor-pointer"/>
                <i onClick={()=>setActualizar(true)} className = {`fas fa-pen my-1 p-1 text-gray-400 hover:text-yellow-400 cursor-pointer ${edit}`}/>
                <i onClick={()=>{
                Delete(dato.id)
                setEjecutarConsulta(true)
                }} className = "fas fa-trash my-1 p-1 text-gray-400 hover:text-red-400 cursor-pointer"/>
            </td>

    
              </>)}
                          
          </tr>
        </tbody>    
      )
  }

export default Lista
