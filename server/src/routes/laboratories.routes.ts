import promiseRouter from 'express-promise-router';
import controller from '../controllers/laboratories.controlles';

const { getAllLaboratories, createLaboratory, updateLaboratory, deleteLaboratory } = controller;

const router = promiseRouter();

router.get('/:id', getAllLaboratories);
router.post('/', createLaboratory);
router.put('/:id', updateLaboratory);
router.delete('/:id', deleteLaboratory);

export default router;
