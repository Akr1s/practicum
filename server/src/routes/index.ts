import subjectRouter from './subjects.routes';
import laboratoriesRouter from './laboratories.routes';
import labsRouter from './labs.router';
import { Router } from 'express';

const router: Router = Router();

router.use('/subjects/', subjectRouter);
router.use('/laboratories/', laboratoriesRouter);
router.use('/labs/', labsRouter);

export default router;
