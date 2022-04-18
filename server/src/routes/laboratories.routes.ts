import promiseRouter from 'express-promise-router';
import controller from '../controllers/laboratories.controlles';

const {
    getAllLaboratories,
    createLaboratory,
    updateLaboratory,
    deleteLaboratory,
    getSingleLaboratory,
} = controller;

const router = promiseRouter();

router.get('/:id', getAllLaboratories);
router.get('/single/:id', getSingleLaboratory);
router.post('/', createLaboratory);
router.put('/:id', updateLaboratory);
router.delete('/:id', deleteLaboratory);

export default router;
