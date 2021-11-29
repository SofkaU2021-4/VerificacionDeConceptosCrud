import './App.css';
import { useState,useEffect } from 'react';
import GetDb from './utils/GetDb';
import Delete from './utils/Delete';

function App() {
  const [store,setStore]=useState([])
 
  useEffect(()=>{
    GetDb(setStore);
    
  },[])



  
  return (
    <div className="App">

      <form>
        
      </form>

      {store.map((dato)=>{
        return(
        <Lista key={dato.id} dato={dato}/>
        )
      })}
      

    </div>
  );
}

const Lista =({dato})=>{

  return (
    <div >
          <span>{dato.name}</span>
          <button onClick={()=>{
            Delete(dato.id)
          }}>eliminar</button>
      </div>    
    )
}




export default App;
