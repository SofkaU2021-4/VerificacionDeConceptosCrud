import { createContext, useContext } from 'react';

export const EjecutarConsultaContext = createContext(null);

export const useEjecutarConsulta = () => {
  return useContext(EjecutarConsultaContext);
};