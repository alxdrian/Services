import axios from 'axios';
import settings from './settings.json';

const axiosClient = axios.create()

axiosClient.defaults.baseURL = settings.API_HOST

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

axiosClient.defaults.timeout = 2000;

export default axiosClient