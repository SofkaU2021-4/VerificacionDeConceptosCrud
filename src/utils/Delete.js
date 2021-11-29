import axios from "axios";



export const DeleteTarea  = async(id,setEjecutarConsulta)=>{
    const options = {method: 'DELETE', url: `http://localhost:8080/${id}`};

    await axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });

}

export const DeleteToDo  = async(id,setEjecutarConsulta)=>{
  const options = {method: 'DELETE', url: `http://localhost:8080/ToDo/${id}/`};

  await axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });

}

