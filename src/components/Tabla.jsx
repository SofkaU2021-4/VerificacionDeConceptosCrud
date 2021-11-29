import React from 'react'
import { useState,useEffect } from 'react';
import {GetTarea,GetToDo} from '../utils/GetDb'
import { useEjecutarConsulta } from '../context/EjecutarConsulta';
import Lista from './Lista';
import {DeleteTarea} from '../utils/Delete';
import { FormularioTareas } from './FormularioTareas';




const Tabla = () => {

    const {ejecutarConsulta,setEjecutarConsulta}=useEjecutarConsulta()
    const [store,setStore]=useState([])


     
  useEffect(()=>{
    GetTarea(setStore,setEjecutarConsulta);
    console.log("consulte")
  
},[ejecutarConsulta])


    return (
        
        <>
        {store.map((tareas)=>{
            return(
                <Tareas tareas={tareas} store={store}/>
            )

        })}
           
        </>
    )
}

const Tareas =({tareas})=>{
    const {ejecutarConsulta,setEjecutarConsulta}=useEjecutarConsulta()
    const [toDo,SetToDO]=useState([])

    useEffect(()=>{
        GetToDo(SetToDO,setEjecutarConsulta);
        console.log("consulte")
      
    },[ejecutarConsulta])


    return (
        
        <div className=" flex flex-col text-center w-full mt-7" >
            <div className="flex justify-between w-full max-w-xl mx-auto text-xl font-bold">
                <span>{tareas.name}</span>
                <i onClick={()=>{
                    DeleteTarea(tareas.id)
                    setEjecutarConsulta(true)
                    }}className = "fas fa-times my-1 p-1 text-gray-400 hover:text-red-400 cursor-pointer"/>
            </div>
            <FormularioTareas lista={tareas.id} />
                <table className = "w-full max-w-xl mx-auto table-auto mt-2 my-7">
                    <thead className = "thead-color leading-10 text-sm text-gray-700 border-1 text-center">
                        <tr>
                            <th>Id</th>
                            <th >Nombre</th>
                            <th >¿ Completado ?</th>
                            <th >Acciones</th>
                        </tr>
                    </thead>
                    {toDo.map((dato)=>{
                        if(dato.id_tarea===tareas.id){
                            return(
                        
                                <Lista key={dato.id}dato={dato} />) 
                        }
                        else{
                            return null;
                        }
                 })}         
                </table>
        </div>
    )

}

export default Tabla
