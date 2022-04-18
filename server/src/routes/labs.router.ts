import promiseRouter from 'express-promise-router';
import controller from '../controllers/labs.controller';

const { getAllLaboratories, updateLaboratory, getSingleLaboratory } = controller;

const router = promiseRouter();

router.get('/', getAllLaboratories);
router.get('/:id', getSingleLaboratory);
router.put('/:id', updateLaboratory);

export default router;
