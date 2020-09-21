import axios from 'axios';

const API_PATH = process.env.REACT_APP_API_PATH;
const API_PREFIX = process.env.REACT_APP_API_PREFIX;

const AxiosClient = axios.create({
  baseURL: `${API_PATH}/${API_PREFIX}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export default AxiosClient;
