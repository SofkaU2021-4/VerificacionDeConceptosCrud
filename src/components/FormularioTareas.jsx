import React from 'react'
import useFormData from '../hooks/useFormData'
import {PostToDo} from '../utils/Post';
import { useEjecutarConsulta } from '../context/EjecutarConsulta';


export const FormularioTareas = ({lista}) => {
    const{form, formData, updateFormData}=useFormData()
    const {setEjecutarConsulta}=useEjecutarConsulta()

    
  const submitForm = async (e) => {
    e.preventDefault(); 
    PostToDo(formData)
    setEjecutarConsulta(true)
    form.current.reset();

  }

    
    return (
        <div className="flex w-full max-w-xl mx-auto" >

          <form ref={form} onChange={updateFormData} onSubmit={submitForm}>
              <span>Nueva Tarea</span>
              <input required name="name" className=" ml-5 border-2"  placeholder="Nombre" type="text"/>
              <input className="hidden" name="id_tarea" value={lista}/>
              <input type="submit" className=" ml-3"/>
          </form>

            
        </div>
    )
}
