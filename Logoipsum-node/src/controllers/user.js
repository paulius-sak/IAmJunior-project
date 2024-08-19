import bcrypt from 'bcrypt';
import UserModel from '../models/user.js';
import jwt from 'jsonwebtoken';

const SIGN_UP = async (req, res) => {
  try {
    const existingUser = await UserModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered' });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    const user = new UserModel({
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
      password: hash,
    });

    const response = await user.save();

    return res.status(201).json({ status: 'User sign-up successful', response: response });
  } catch (err) {
    console.log('handled error: ', err);
    return res.status(500).json({ message: 'error happened' });
  }
};

const LOGIN = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ user: { _id: user._id, name: user.name, email: user.email } }, process.env.JWT_SECRET, {
      expiresIn: '24h',
    });

    return res.status(200).json({
      message: 'Login successful',
      token: token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.log('Handled error: ', err);
    return res.status(500).json({ message: 'An error occurred during login' });
  }
};

const GET_ALL_USERS = async (req, res) => {
  try {
    const users = await UserModel.find().select('-password');

    return res.json({ users: users });
  } catch (err) {
    console.log('handled error: ', err);
    return res.status(500).json({ message: 'error happened' });
  }
};

const GET_USERS_BY_ID = async (req, res) => {
  try {
    const user = await UserModel.findOne({ _id: req.params.id }).select('-password');

    if (!user) {
      return res.status(404).json({
        message: `User with id: ${{ _id: req.params.id }} was not found`,
      });
    }

    return res.json({ user: user });
  } catch (err) {
    console.log('handled error: ', err);
    return res.status(500).json({ message: 'error happened' });
  }
};

const DELETE_USER = async (req, res) => {
  try {
    const user = await UserModel.findOneAndDelete({ _id: req.params.id });

    if (!user) {
      return res.status(404).json({
        message: `User with id: ${{ _id: req.params.id }} was not found`,
      });
    }

    return res.status(200).json({
      message: `User with id: ${{ _id: req.params.id }} has been deleted successfully`,
    });
  } catch (err) {
    console.log('handled error: ', err);
    return res.status(500).json({ message: 'error happened' });
  }
};

const UPDATE_USER = async (req, res) => {
  try {
    const { name, age, email, password } = req.body;

    const user = await UserModel.findById({ _id: req.params.id });
    if (!user) {
      return res.status(404).json({
        message: `User with id: ${{ _id: req.params.id }} was not found`,
      });
    }

    if (name) user.name = name;
    if (age) user.age = age;
    if (email) user.email = email;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    const updatedUser = await user.save();

    return res.status(200).json({
      message: `User with id: ${req.params.id} has been updated successfully`,
      user: updatedUser,
    });
  } catch (err) {
    console.log('Handled error: ', err);
    return res.status(500).json({ message: 'An error occurred during the update' });
  }
};

export { SIGN_UP, LOGIN, GET_ALL_USERS, GET_USERS_BY_ID, DELETE_USER, UPDATE_USER };
