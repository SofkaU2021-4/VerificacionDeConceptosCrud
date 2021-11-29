import axios from "axios";


export const PostTarea=(formData)=>{
    const options = {
        method: 'POST',
        url: 'http://localhost:8080/',
        headers: {'Content-Type': 'application/json'},
        data: {name: formData.name}
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });

}

export const PostToDo=(formData)=>{
  const options = {
      method: 'POST',
      url: 'http://localhost:8080/ToDo/',
      headers: {'Content-Type': 'application/json'},
      data: {name: formData.name , id_tarea:formData.id_tarea}
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });

}