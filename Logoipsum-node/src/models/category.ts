import mongoose, { Schema, Document, Model } from 'mongoose';

interface ICategory extends Document {
  name: string;
  color: string;
  url: string;
  user_id: string;
}

const categorySchema: Schema<ICategory> = new Schema(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
    url: { type: String, required: true },
    user_id: { type: String, required: true },
  },
  { timestamps: true },
);

const Category: Model<ICategory> = mongoose.model<ICategory>('Category', categorySchema);
export default Category;
