import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true,
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const instanceWithoutAuth = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true,
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json',
  },
});
