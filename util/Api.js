import axios from 'axios';

export const httpClient = axios.create({
  baseURL: `http://localhost:4000/api`, //YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain, */*',
        'Access-Control-Allow-Origin':'*',
        // credentials: 'include',
        // 'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept',
        // 'Access-Control-Allow-Credentials':true,
  },
});
