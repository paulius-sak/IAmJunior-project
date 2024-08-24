import mongoose, { Types } from 'mongoose';

interface IBooking {
  businessId: Types.ObjectId;
  date: Date;
  time: string;
  userEmail: string;
  userName: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

const bookingSchema = new mongoose.Schema<IBooking>({
  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  date: {
    type: Date,
    required: [true, 'field is required. e.g. 2022-04-28'],
  },
  time: {
    type: String,
    required: [true, 'field is required. e.g. 14:00'],
  },
  userEmail: {
    type: String,
    required: [true, 'field is required.'],
    validate: {
      validator: function (email: string) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: (props: { value: string }) => `${props.value} is not a valid email!`,
    },
  },
  userName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: [true, 'Booking status is required.'],
    enum: {
      values: ['confirmed', 'pending', 'cancelled'],
      message: '{VALUE} is not supported',
    },
  },
});

const Booking = mongoose.model<IBooking>('Booking', bookingSchema);

export default Booking;
