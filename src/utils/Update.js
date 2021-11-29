import axios from "axios";



export const Update=(dato)=>{


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

export const Check=(id)=>{
 


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