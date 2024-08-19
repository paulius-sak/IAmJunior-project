import express from 'express';
import { CREATE_BOOKING, GET_BOOKINGS_BY_EMAIL } from '../controllers/bookingController.js';

const router = express.Router();

router.post('/bookings', CREATE_BOOKING);
router.get('/bookings/user/:email', GET_BOOKINGS_BY_EMAIL);
router.delete('/bookings/:id', GET_BOOKINGS_BY_EMAIL);

export default router;
