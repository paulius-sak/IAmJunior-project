import express from 'express';
import { CREATE_CATEGORY, GET_ALL_CATEGORIES } from '../controllers/category.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/categories', auth, CREATE_CATEGORY);
router.get('/categories',auth, GET_ALL_CATEGORIES);

export default router;
