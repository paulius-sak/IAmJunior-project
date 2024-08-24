import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../models/user';

const SIGN_UP = async (req: Request, res: Response): Promise<void> => {
  try {
    const existingUser = await UserModel.findOne({ email: req.body.email });
    if (existingUser) {
      res.status(400).json({ message: 'Email is already registered' });
      return;
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

    res.status(201).json({ status: 'User sign-up successful', response: response });
  } catch (err) {
    console.log('handled error: ', err);
    res.status(500).json({ message: 'error happened' });
    return;
  }
};

const LOGIN = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).json({ message: 'Invalid email or password' });
      return;
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: 'Invalid email or password' });
      return;
    }

    const token = jwt.sign(
      { user: { _id: user._id, name: user.name, email: user.email } },
      process.env.JWT_SECRET as jwt.Secret,
      {
        expiresIn: '24h',
      },
    );

    res.status(200).json({
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
    res.status(500).json({ message: 'An error occurred during login' });
    return;
  }
};

const GET_ALL_USERS = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await UserModel.find().select('-password');

    res.json({ users: users });
  } catch (err) {
    console.log('handled error: ', err);
    res.status(500).json({ message: 'error happened' });
    return;
  }
};

const GET_USERS_BY_ID = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await UserModel.findOne({ _id: req.params.id }).select('-password');

    if (!user) {
      res.status(404).json({
        message: `User with id: ${{ _id: req.params.id }} was not found`,
      });
      return;
    }

    res.json({ user: user });
  } catch (err) {
    console.log('handled error: ', err);
    res.status(500).json({ message: 'error happened' });
    return;
  }
};

const DELETE_USER = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await UserModel.findOneAndDelete({ _id: req.params.id });

    if (!user) {
      res.status(404).json({
        message: `User with id: ${{ _id: req.params.id }} was not found`,
      });
      return;
    }

    res.status(200).json({
      message: `User with id: ${{ _id: req.params.id }} has been deleted successfully`,
    });
  } catch (err) {
    console.log('handled error: ', err);
    res.status(500).json({ message: 'error happened' });
    return;
  }
};

const UPDATE_USER = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, age, email, password } = req.body;

    const user = await UserModel.findById({ _id: req.params.id });
    if (!user) {
      res.status(404).json({
        message: `User with id: ${{ _id: req.params.id }} was not found`,
      });
      return;
    }

    name && (user.name = name);
    age && (user.age = age);
    email && (user.email = email);

    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    const updatedUser = await user.save();

    res.status(200).json({
      message: `User with id: ${req.params.id} has been updated successfully`,
      user: updatedUser,
    });
  } catch (err) {
    console.log('Handled error: ', err);
    res.status(500).json({ message: 'An error occurred during the update' });
    return;
  }
};

export { SIGN_UP, LOGIN, GET_ALL_USERS, GET_USERS_BY_ID, DELETE_USER, UPDATE_USER };
