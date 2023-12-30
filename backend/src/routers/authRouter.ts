import { Router } from 'express';

const router = Router();

router.post('/registration');
router.post('/login');
router.get('/logout');
router.get('/refresh');

export default router;
