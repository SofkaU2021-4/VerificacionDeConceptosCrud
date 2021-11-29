import React from 'react'
import { useState,useEffect } from 'react';
import GetDb from '../utils/GetDb'
import { useEjecutarConsulta } from '../context/EjecutarConsulta';
import Lista from './Lista';




const Tabla = () => {

    const {ejecutarConsulta,setEjecutarConsulta}=useEjecutarConsulta()
    const [store,setStore]=useState([])


     
  useEffect(()=>{
    GetDb(setStore,setEjecutarConsulta);
    console.log("consulte")
  
},[ejecutarConsulta])


    return (
        <div className=" flex w-full" >
                <table className = "w-full max-w-xl mx-auto table-auto mt-2">
                    <thead className = "thead-color leading-10 text-sm text-gray-700 border-1 text-center">
                        <tr>
                            <th>Id</th>
                            <th  >Nombre</th>
                            <th >¿ Completado ?</th>
                            <th >Acciones</th>
                        </tr>
                    </thead>
                    {store.map((dato)=>{
                    return(
                        <Lista key={dato.id}dato={dato} />)})}         
                </table>
        </div>
    )
}

export default Tabla
