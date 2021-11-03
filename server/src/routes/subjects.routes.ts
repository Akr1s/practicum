import promiseRouter from 'express-promise-router';
import controller from '../controllers/subjets.controller';

const { getAllSubjects } = controller;

const router = promiseRouter();

router.get('/', getAllSubjects);

export default router;
