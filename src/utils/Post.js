import axios from "axios";


const Post=(formData)=>{
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

export default Post;