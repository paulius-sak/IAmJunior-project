import BookingModel from '../models/booking.js';

const CREATE_BOOKING = async (req, res) => {
  try {
    const booking = new BookingModel({
      businessId: req.body.businessId,
      date: req.body.date,
      time: req.body.time,
      userEmail: req.body.userEmail,
      userName: req.body.userName,
      status: 'Booked',
    });

    const response = await booking.save();

    return res.status(201).json({ status: 'Booking was created', response: response });
  } catch (err) {
    console.log('handled error: ', err);
    return res.status(500).json({ message: 'error happened' });
  }
};

const GET_BOOKINGS_BY_EMAIL = async (req, res) => {
  try {
    const userEmail = req.params.email;

    const myBookings = await BookingModel.find({ userEmail: userEmail });

    if (myBookings.length === 0) {
      return res.status(404).json({ message: 'No bookings found for this email.' });
    }

    return res.status(200).json({ myBookings: myBookings });
  } catch (err) {
    console.log('Handled error: ', err);
    return res.status(500).json({ message: 'An error occurred while retrieving bookings.' });
  }
};

const DELETE_BOOKING_BY_ID = async (req, res) => {
  try {
    const deleteBooking = await BookingModel.findOneAndDelete(req.params.id);

    if (!deleteBooking) {
      return res.status(404).json({ message: 'Booking with id: ${req.params.id} was not found' });
    }

    return res.status(200).json({ message: `Booking with id: ${req.params.id} was deleted` });
  } catch (err) {
    console.log('Handled error: ', err);
    return res.status(500).json({ message: 'An error occurred while deleting booking.' });
  }
};

export { CREATE_BOOKING, GET_BOOKINGS_BY_EMAIL, DELETE_BOOKING_BY_ID };
