import axios, { AxiosInstance } from 'axios';
import IRings from '../interfaces/Rings';

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:3333/api/rings", // Adicione o protocolo http:// ou https://
  headers: {
    "Content-Type": "application/json",
  },
});

const getRings = async (): Promise<IRings[]> => {
  const response = await api.get<IRings[]>("");
  return response.data;
};

export { api, getRings };
