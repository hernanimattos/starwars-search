import axios from 'axios';

export const HTTP = axios.create({
  baseURL: 'https://swapi.dev/api/people/',
});
