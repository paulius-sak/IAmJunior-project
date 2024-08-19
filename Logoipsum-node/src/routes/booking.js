import express from 'express';
import { CREATE_BOOKING, GET_BOOKINGS_BY_EMAIL, DELETE_BOOKING_BY_ID } from '../controllers/booking.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/bookings', auth, CREATE_BOOKING);
router.get('/bookings/user/:email', auth, GET_BOOKINGS_BY_EMAIL);
router.delete('/bookings/:id', auth, DELETE_BOOKING_BY_ID);

export default router;
