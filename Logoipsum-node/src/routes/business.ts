import express from 'express';
import {
  CREATE_BUSINESS,
  GET_ALL_BUSINESSES,
  GET_BUSINESS_BY_ID,
  GET_BUSINESSES_BY_CATEGORY,
  UPDATE_BUSINESS,
} from '../controllers/business';
import auth from '../middleware/auth';

const router = express.Router();

router.post('/businesses', auth, CREATE_BUSINESS);
router.get('/businesses', GET_ALL_BUSINESSES);
router.get('/businesses/:id', GET_BUSINESS_BY_ID);
router.get('/businesses/category/:category', GET_BUSINESSES_BY_CATEGORY);
router.put('/businesses/:id', auth, UPDATE_BUSINESS);

export default router;
