import axios, { AxiosInstance } from 'axios';

class Service {
  public axiosInstance: AxiosInstance;
  public axiosAuthInstance: AxiosInstance;

  constructor() {
    const baseURL = process.env.REACT_APP_SERVER_URL;
    const headers = {
      'Content-Type': 'application/json',
    };

    this.axiosInstance = axios.create({
      baseURL,
      headers,
      timeout: 2000,
      withCredentials: true,
    });

    this.axiosAuthInstance = axios.create({
      baseURL,
      headers,
      timeout: 2000,
      withCredentials: true,
    });
  }
}

export default Service;
