import subjectRouter from './subjects.routes';
import { Router } from 'express';

const router: Router = Router();

router.use('/subjects/', subjectRouter);

export default router;
