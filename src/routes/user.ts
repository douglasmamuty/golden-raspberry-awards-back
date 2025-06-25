import { Router } from 'express';
import { createUser, listUsers } from '../controllers/user';

const router = Router();
/**
 * @swagger
 * /users:
 *   get:
 *     summary: List of users
 *     responses:
 *       200:
 *         description: List of users
 */
router.get('/users', listUsers);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado
 */
router.post('/users', createUser);


export default router;

