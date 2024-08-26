import express from 'express';
import { CREATE_CATEGORY, GET_ALL_CATEGORIES } from '../controllers/category';
import auth from '../middleware/auth';

const router = express.Router();

router.post('/categories', auth, CREATE_CATEGORY);
router.get('/categories', GET_ALL_CATEGORIES);

export default router;
