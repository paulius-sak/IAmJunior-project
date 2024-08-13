import express from "express";
import { CREATE_BOOKING } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/bookings", CREATE_BOOKING);

export default router;