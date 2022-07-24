import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/",
//   headers:{

//   }
//   params:{
//     api_key:"2545752"
//   }
});

export default axiosInstance;