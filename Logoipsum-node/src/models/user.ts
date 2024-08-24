import mongoose, { Schema, Document, Model, SchemaDefinition } from 'mongoose';

interface IUser extends Document {
  name: string;
  age?: number;
  email: string;
  password: string;
}

const validateEmail = (email: string): boolean => {
  // eslint-disable-next-line no-useless-escape
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const userSchemaFields: SchemaDefinition<IUser> = {
  name: {
    type: String,
    required: true,
    set: capitalizeFirstLetter,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, 'Email address is required'],
    validate: {
      validator: validateEmail,
      message: 'Please fill a valid email address',
    },
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
};

const userSchema = new Schema<IUser>(userSchemaFields, { timestamps: true });

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);
export default User;
