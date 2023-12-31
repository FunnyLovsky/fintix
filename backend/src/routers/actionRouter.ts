import { Router } from 'express';
import { ActionController } from '../controllers/actionsController';

const router = Router();

router.get('/actions', ActionController.getActions);
router.post('/create', ActionController.create);
router.put('/update');
router.delete('/delete');
router.post('/import', ActionController.parseFile);
router.post('/export', ActionController.createFile);

export default router;
