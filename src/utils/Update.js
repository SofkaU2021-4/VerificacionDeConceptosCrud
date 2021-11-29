import axios from "axios";



const Update=(dato)=>{
  console.log(dato)


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


export default Update;
