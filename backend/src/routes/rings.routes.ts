import { Router } from "express";
import { getAllRings, createRing, updateRing, deleteRing, getRingById } from "../controllers/RingsController";
const router = Router();

/**
 * @swagger
 * /api/rings:
 *   get:
 *     summary: Retorna todos os anéis
 *     description: Retorna uma lista de todos os anéis cadastrados.
 *     responses:
 *       200:
 *         description: Lista de anéis retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ring'
 */
router.get('/rings', getAllRings);

/**
 * @swagger
 * /api/rings/{id}:
 *   get:
 *     summary: Retorna um anel específico pelo ID
 *     description: Retorna os detalhes de um anel com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do anel
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Anel encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ring'
 *       404:
 *         description: Anel não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/rings/:id', getRingById);

/**
 * @swagger
 *  /api/rings:
 *   post:
 *     summary: Cria um novo anel
 *     description: Endpoint para criar um novo anel com as informações fornecidas.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ring'
 *     responses:
 *       201:
 *         description: Anel criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ring'
 *       400:
 *         description: Requisição inválida
 */
router.post('/rings', createRing);

/**
 * @swagger
 *  /api/rings/{id}:
 *   put:
 *     summary: Atualiza um anel existente
 *     description: Atualiza um anel com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do anel
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ring'
 *     responses:
 *       200:
 *         description: Anel atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ring'
 *       400:
 *         description: Requisição inválida
 *       404:
 *         description: Anel não encontrado
 */
router.put('/rings/:id', updateRing);

/**
 * @swagger
 *  /api/rings/{id}:
 *   delete:
 *     summary: Deleta um anel existente
 *     description: Deleta o anel com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do anel
 *     responses:
 *       204:
 *         description: Anel deletado com sucesso
 *       404:
 *         description: Anel não encontrado
 */
router.delete('/rings/:id', deleteRing);


export default router;
