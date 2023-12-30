import { Router } from 'express';
import { ActionController } from '../controllers/actionsController';

const router = Router();

router.get('/actions', ActionController.getActions);
router.post('/create', ActionController.create);
router.post('/import');
router.post('/export');
router.put('/update');
router.delete('/delete');

export default router;
