import axios from 'axios';
const http = axios.create();
http.interceptors.response.use(response => {

  let res = response.data;
  console.log(res)
  return res
})
export default http;
