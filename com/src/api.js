import axios from 'axios';


export const HTTP = () => {
  return axios.create({
  baseURL: 'http://localhost:53117/',
  });
}