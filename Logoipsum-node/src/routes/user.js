import express from 'express';
import { SIGN_UP, LOGIN, GET_ALL_USERS, GET_USERS_BY_ID, DELETE_USER, UPDATE_USER } from '../controllers/user.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/users', SIGN_UP);
router.post('/users/login', LOGIN);
router.get('/users', auth, GET_ALL_USERS);
router.get('/users/:id', auth, GET_USERS_BY_ID);
router.delete('/users/:id', auth, DELETE_USER);
router.put('/users/:id', auth, UPDATE_USER);

export default router;
