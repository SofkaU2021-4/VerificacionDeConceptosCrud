import React from 'react'
import useFormData from '../hooks/useFormData'
import Post from './utils/Post';
import { useEjecutarConsulta } from '../context/EjecutarConsulta';

export const Formulario = () => {
    const{form, formData, updateFormData}=useFormData()
    const {setEjecutarConsulta}=useEjecutarConsulta()

    
  const submitForm = async (e) => {
    e.preventDefault(); 
    Post(formData)
    setEjecutarConsulta(true)
    form.current.reset();

  }

    
    return (
        <div>
            
        </div>
    )
}
