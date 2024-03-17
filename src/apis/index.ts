import axios from 'axios';

const { VITE_SERVER_URL } = import.meta.env;
console.log('REACT_APP_SERVER_URL', VITE_SERVER_URL);

export const instance = axios.create({
  baseURL: VITE_SERVER_URL,
  withCredentials: true,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});
