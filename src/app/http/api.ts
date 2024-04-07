import Axios, { AxiosInstance } from 'axios';

export const api: AxiosInstance = Axios.create({
  baseURL: "https://api.github.com"
})