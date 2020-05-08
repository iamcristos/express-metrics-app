import express from 'express';

import validation from '../validation';
import controller from '../controller';

const router = express.Router();

router.get('/key/sum', controller.getMetrics());
router.post('/key', validation.postMetric(), controller.addMetrics());

export default router;
