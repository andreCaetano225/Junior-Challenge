import IRings from "../interfaces/Rings";
import { AppDataSource } from "../database/data-source";
import { Rings } from "../models/Rings";


const ringsRepository = AppDataSource.getRepository(Rings)

export const getAllRingsService = async (): Promise<IRings[]> => {
    return await ringsRepository.find()
}

export const createRingService = async (ringData: IRings): Promise<IRings> => {
    const forged = ringData.forgedBy;

    const forgedCount = await AppDataSource.getRepository(Rings)
        .createQueryBuilder("ring")
        .where("ring.forgedBy = :forgedBy", { forgedBy: forged })
        .getCount(); 

    switch (forged) {
        case "Elfos":
            if (forgedCount >= 2) {
                throw new Error("Elfos já atingiram o limite de 3 anéis.");
            }
            break;
        case "Anões":
            if (forgedCount >= 7) {
                throw new Error("Anões já atingiram o limite de 7 anéis.");
            }
            break;
        case "Homens":
            if (forgedCount >= 9) {
                throw new Error("Homens já atingiram o limite de 9 anéis.");
            }
            break;
        case "Sauron":
            if (forgedCount >= 1) {
                throw new Error("Sauron já atingiu o limite de 1 anel.");
            }
            break;
        default:
            throw new Error("Forjador inválido ou não especificado.");
    }

    const newRing = AppDataSource.getRepository(Rings).create(ringData);
    return await AppDataSource.getRepository(Rings).save(newRing);
};

export const updateRingService = async (id: number, ringData: Partial<IRings>): Promise<IRings | null> => {
    const ring = await ringsRepository.findOneBy({ id });
    if (!ring) return null;

    Object.assign(ring, ringData);
    return await ringsRepository.save(ring);
};

export const deleteRingService = async (id: number): Promise<boolean> => {
    const result = await ringsRepository.delete(id);
    return result.affected !== 0;
};