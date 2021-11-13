import promiseRouter from 'express-promise-router';
import controller from '../controllers/subjets.controller';

const { getAllSubjects, createSubject, updateSubject, deleteSubject } = controller;

const router = promiseRouter();

router.get('/', getAllSubjects);
router.post('/', createSubject);
router.put('/:id', updateSubject);
router.delete('/:id', deleteSubject);

export default router;
