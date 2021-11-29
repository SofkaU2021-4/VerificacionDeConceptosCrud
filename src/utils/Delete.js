import axios from "axios";



const Delete=({id})=>{
    const options = {method: 'DELETE', url: `http://localhost:8080/${id}`};

    axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });

}

export default Delete;
