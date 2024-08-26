import mongoose, { Schema, Document, Model } from 'mongoose';

interface IImage {
  url: string;
}

interface IBusiness extends Document {
  name: string;
  about: string;
  address: string;
  category: string;
  contactPerson: string;
  email: string;
  images: IImage[];
  user_id: string;
}

const imageSchema = new Schema<IImage>({
  url: { type: String, required: true,  }
});

const businessSchema = new mongoose.Schema<IBusiness>(
  {
    name: { type: String, required: true },
    about: { type: String, required: true },
    address: { type: String, required: true },
    category: { type: String, required: true },
    contactPerson: { type: String, required: true },
    email: { type: String, required: true },
    images: [imageSchema],
    user_id: { type: String, required: true },
  },
  { timestamps: true },
);

const Business: Model<IBusiness> = mongoose.model<IBusiness>('Business', businessSchema);
export default Business;
