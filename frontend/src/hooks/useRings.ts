import IRings from "../interfaces/Rings";
import { api } from "../services/api";

export const getRings = async (): Promise<IRings[]> => {
  const response = await api.get("/rings");
  return response.data;
};

export const getRingById = async (id: number): Promise<IRings> => {
  const response = await api.get(`/rings/${id}`);
  return response.data;
};

export const saveRing = async (ring: IRings): Promise<IRings> => {
  if (ring.id) {
    const response = await api.put(`/rings/${ring.id}`, ring);
    return response.data;
  } else {
    const response = await api.post("/rings", ring);
    return response.data;
  }
};

export const deleteRing = async (id: number): Promise<IRings> => {
  const response = await api.delete(`/rings/${id}`);
  return response.data; 
};

