import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://anndancestudio-57004.firebaseio.com/',
});

export default instance;
