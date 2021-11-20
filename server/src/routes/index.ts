import subjectRouter from './subjects.routes';
import laboratoriesRouter from './laboratories.routes';
import { Router } from 'express';

const router: Router = Router();

router.use('/subjects/', subjectRouter);
router.use('/laboratories/', laboratoriesRouter);

export default router;
