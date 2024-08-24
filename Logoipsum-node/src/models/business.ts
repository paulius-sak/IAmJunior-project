import mongoose, { Schema, Document, Model } from 'mongoose';

interface IBusiness extends Document {
  name: string;
  about: string;
  address: string;
  category: string;
  contactPerson: string;
  email: string;
  images: string[];
  user_id: string;
}

const businessSchema = new mongoose.Schema<IBusiness>(
  {
    name: { type: String, required: true },
    about: { type: String, required: true },
    address: { type: String, required: true },
    category: { type: String, required: true },
    contactPerson: { type: String, required: true },
    email: { type: String, required: true },
    images: [
      {
        type: String,
        required: true,
        default: [
          {
            url: 'https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
          },
        ],
      },
    ],
    user_id: { type: String, required: true },
  },
  { timestamps: true },
);

const Business: Model<IBusiness> = mongoose.model<IBusiness>('Business', businessSchema);
export default Business;
