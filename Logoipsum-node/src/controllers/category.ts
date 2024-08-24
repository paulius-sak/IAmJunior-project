import CategoryModel from '../models/category';
import { Request, Response } from 'express';

const CREATE_CATEGORY = async (req: Request, res: Response): Promise<void>  => {
  try {
    const category = new CategoryModel({
      name: req.body.name,
      color: req.body.color,
      url: req.body.url,
    });

    const response = await category.save();

    res.status(201).json({ status: 'Category was created', response: response });
  } catch (err) {
    console.log('handled error: ', err);
    res.status(500).json({ message: 'error happened' });
    return
  }
};

const GET_ALL_CATEGORIES = async (req: Request, res: Response): Promise<void>  => {
  try {
    const categories = await CategoryModel.find();

    res.json({ categories: categories });
  } catch (err) {
    console.log('handled error: ', err);
    res.status(500).json({ message: 'error happened' });
    return
  }
};

export { CREATE_CATEGORY, GET_ALL_CATEGORIES };
