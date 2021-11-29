import axios from "axios";


const GetDb= async(setData,setEjecutarConsulta)=>{
    const options = {method: 'GET', url: 'http://localhost:8080/'};

await axios.request(options)
.then(function (response) {
  setData(response.data);
  setEjecutarConsulta(false)
}).catch(function (error) {
  console.error(error);
});

}

export default GetDb;
