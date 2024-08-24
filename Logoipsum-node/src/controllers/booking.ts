import { Request, Response } from 'express';
import BookingModel from '../models/booking';

const CREATE_BOOKING = async (req: Request, res: Response): Promise<void> => {
  try {
    const booking = new BookingModel({
      businessId: req.body.businessId,
      date: req.body.date,
      time: req.body.time,
      userEmail: req.body.userEmail,
      userName: req.body.userName,
      status: 'pending',
    });

    const response = await booking.save();

    res.status(201).json({ status: 'Booking was created', response: response });
  } catch (err) {
    console.error('Handled error: ', err);
    res.status(500).json({ message: 'An error occurred while creating the booking.' });
  }
};

const GET_BOOKINGS_BY_EMAIL = async (req: Request, res: Response): Promise<void> => {
  try {
    const userEmail = req.params.email;

    const myBookings = await BookingModel.find({ userEmail: userEmail });

    if (myBookings.length === 0) {
      res.status(404).json({ message: 'No bookings found for this email.' });
      return;
    }

    res.status(200).json({ myBookings: myBookings });
  } catch (err) {
    console.error('Handled error: ', err);
    res.status(500).json({ message: 'An error occurred while retrieving bookings.' });
  }
};

const DELETE_BOOKING_BY_ID = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleteBooking = await BookingModel.findOneAndDelete({ _id: req.params.id });

    if (!deleteBooking) {
      res.status(404).json({ message: `Booking with id: ${req.params.id} was not found` });
      return;
    }

    res.status(200).json({ message: `Booking with id: ${req.params.id} was deleted` });
  } catch (err) {
    console.error('Handled error: ', err);
    res.status(500).json({ message: 'An error occurred while deleting the booking.' });
  }
};

export { CREATE_BOOKING, GET_BOOKINGS_BY_EMAIL, DELETE_BOOKING_BY_ID };
