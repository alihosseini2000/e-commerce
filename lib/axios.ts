import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.in',
});

export default axiosInstance;
