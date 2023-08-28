import axios from 'axios';

export const httpClient = axios.create({
  baseURL: `http://localhost:5000/api`, //YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
  },
});
