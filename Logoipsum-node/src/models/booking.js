import mongoose from "mongoose";


const bookingSchema = mongoose.Schema({
  id: { type: Number, required: true},
  businessId: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  userEmail: { type: String, required: true },
  userName: { type: String, required: true },
  status: { type: String, default: "Booked" },
},
{ timestamps: true });

export default mongoose.model("Booking", bookingSchema);