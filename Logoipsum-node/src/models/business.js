import mongoose from 'mongoose';

const imageSchema = mongoose.Schema({
  url: { type: String, required: true },
});

const businessSchema = mongoose.Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    about: { type: String, required: true },
    address: { type: String, required: true },
    category: { type: String, required: true },
    contactPerson: { type: String, required: true },
    email: { type: String, required: true },
    images: {
      type: [imageSchema],
      required: true,
      default:
        'https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
    },
    user_id: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.model('Business', businessSchema);
