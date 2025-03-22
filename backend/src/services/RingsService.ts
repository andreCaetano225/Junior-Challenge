import { Rings } from "../models/rings";
import IRings from "../interfaces/Rings";
import { AppDataSource } from "../database/data-source";

const ringsRepository = AppDataSource.getRepository(Rings)

export const getRings = async (): Promise<IRings[]> => {
    return await ringsRepository.find()
}

const createRing = async (ringData: IRings): Promise<IRings> => {
    const newRing = ringsRepository.create(ringData);
    return await ringsRepository.save(newRing);
};

const updateRing = async (id: number, ringData: Partial<IRings>): Promise<IRings | null> => {
    const ring = await ringsRepository.findOneBy({ id });
    if (!ring) return null;

    Object.assign(ring, ringData);
    return await ringsRepository.save(ring);
};

const deleteRing = async (id: number): Promise<boolean> => {
    const result = await ringsRepository.delete(id);
    return result.affected !== 0;
};