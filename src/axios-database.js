import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://card-secretary.firebaseio.com/'
});

export default instance;
