import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/e-commerce-174fa/us-central1/api', // the api url
});

export default instance;
