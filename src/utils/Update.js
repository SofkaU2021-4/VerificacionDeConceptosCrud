import axios from "axios";



export const UpdateTarea=(dato)=>{


  const options = {
    method: 'PATCH',
    url: 'http://localhost:8080/',
    headers: {'Content-Type': 'application/json'},
    data: { id: dato.id, name:dato.name}
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });


}

export const CheckTarea=(id)=>{
 


  const options = {
    method: 'PATCH',
    url: `http://localhost:8080/${id}`,
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });


}

export const CheckToDo=(infoDato)=>{
 


  const options = {
    method: 'PATCH',
    url: `http://localhost:8080/ToDo/`,
    headers: {'Content-Type': 'application/json'},
    data: { id: infoDato.id, name:infoDato.name , id_tarea:infoDato.id_tarea , completed:infoDato.completed}
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });


}

export const UpdateToDo=(dato)=>{
 


  const options = {
    method: 'PATCH',
    url: 'http://localhost:8080/ToDo/',
    headers: {'Content-Type': 'application/json'},
    data: { id: dato.id, name:dato.name ,id_tarea:dato.id_tarea}
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });



}