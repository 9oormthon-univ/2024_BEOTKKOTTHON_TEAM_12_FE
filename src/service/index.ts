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

export async function getData<T>(endpoint: string): Promise<T> {
  const response = await instance.get(endpoint);
  return response.data;
}

export async function getInfiniteData<T>(endpoint: string, pageParam: number): Promise<T> {
  const response = await instance.get(`${endpoint}?pageNumber=${pageParam}`);
  return response.data;
}
