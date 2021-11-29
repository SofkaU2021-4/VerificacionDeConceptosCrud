import axios from "axios";


const GetDb= async(setData)=>{
    const options = {method: 'GET', url: 'http://localhost:8080/'};

await axios.request(options)
.then(function (response) {
  setData(response.data);
}).catch(function (error) {
  console.error(error);
});

}

export default GetDb;
