import { Router } from 'express';
import movieRoutes from './movie';

const router = Router();

router.use(movieRoutes);

export default router;
