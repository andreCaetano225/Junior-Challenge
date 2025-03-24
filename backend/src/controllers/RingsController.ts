import { Request, Response } from "express";
import { 
  createRingService, 
  getAllRingsService, 
  updateRingService, 
  deleteRingService, 
  getRingByIdService 
} from "../services/RingsService";
import IRings from "../interfaces/Rings";

export const getAllRings = async (_req: Request, res: Response): Promise<void> => {
    try {
        const rings: IRings[] = await getAllRingsService();
        res.status(200).json(rings);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar os aneis" });
    }
};

export const createRing = async (req: Request, res: Response): Promise<void> => {
    const {name, power, carrier, forgedBy, imagem} = req.body;
    const dataRing = {
        name,
        power,
        carrier,
        forgedBy,
        imagem
    };
    try {
        const newRing = await createRingService(dataRing);
        res.status(201).json(newRing);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const updateRing = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const {name, power, carrier, forgedBy, imagem} = req.body;

    const ringDataUpdate = {
        name,
        power,
        carrier,
        forgedBy,
        imagem
    };
    try {
        const ringUpdate = await updateRingService(Number(id), ringDataUpdate);
        res.status(200).json(ringUpdate);
    } catch (error) {
        res.status(500).json('Erro ao atualizar um anel');
    }
};

export const deleteRing = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const ringDelete = await deleteRingService(Number(id));
        res.status(203).json(ringDelete);
    } catch (error) {
        res.status(500).json('Erro ao deletar um anel');
    }
};

export const getRingById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const ring = await getRingByIdService(Number(id)); 
        if (!ring) {
            res.status(404).json({ message: "Anel não encontrado" });
        } else {
            res.status(200).json(ring);  
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar o anel" });
    }
};
