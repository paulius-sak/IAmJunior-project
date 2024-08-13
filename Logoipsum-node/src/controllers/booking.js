import { v4 as uuidv4 } from "uuid";
import BookingModel from "../models/booking.js";

const CREATE_BOOKING = async (req, res) => {
  try {
    const booking = new BookingModel({
      id: uuidv4(),
      businessId: req.body.businessId,
      date: req.body.date,
      time: req.body.time,
      userEmail: req.body.userEmail,
      userName: req.body.userName,
      status: "Booked",
    });

    const response = await booking.save();

    return res.status(201).json({ status: "Booking was created", response: response});
  } catch (err) {
    console.log("handled error: ", err);
    return res.status(500).json({ message: "error happened" });
  }
};

export { CREATE_BOOKING };