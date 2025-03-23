import { Router } from "express";
import { getAllRings, createRing, updateRing, deleteRing } from "../controllers/RingsController";

const router = Router()

router.get('/rings', getAllRings)
router.post('/rings', createRing)
router.put('/rings/:id', updateRing)
router.delete('/rings/:id', deleteRing)


export default router
