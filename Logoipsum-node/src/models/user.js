import mongoose from 'mongoose';

const validateEmail = (email) => {
  // eslint-disable-next-line no-useless-escape
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      set: capitalizeFirstLetter,
    },
    age: { type: Number },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: 'Email address is required',
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [
        // eslint-disable-next-line no-useless-escape
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please fill a valid email address',
      ],
    },
    password: { type: String, required: true, minlength: 6 },
  },
  { timestamps: true },
);

export default mongoose.model('User', userSchema);
