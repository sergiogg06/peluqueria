// api.ts
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export const api = axios.create({
  baseURL: API_URL,
});

export const getSaludo = async () => {
  const res = await api.get('/saludo');
  return res.data;
};
