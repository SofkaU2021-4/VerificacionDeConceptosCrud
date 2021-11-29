import axios from "axios";


export const GetTarea= async(setData,setEjecutarConsulta)=>{
    const options = {method: 'GET', url: 'http://localhost:8080/'};

await axios.request(options)
.then(function (response) {
  setData(response.data);
  setEjecutarConsulta(false)
}).catch(function (error) {
  console.error(error);
});

}

export const GetToDo= async(setData,setEjecutarConsulta)=>{
  const options = {method: 'GET', url: 'http://localhost:8080/ToDo/'};

await axios.request(options)
.then(function (response) {
setData(response.data);
setEjecutarConsulta(false)
}).catch(function (error) {
console.error(error);
});

}

