import CategoryModel from '../models/category.js';

const CREATE_CATEGORY = async (req, res) => {
  try {
    const category = new CategoryModel({
      name: req.body.name,
      color: req.body.color,
      url: req.body.url,
    });

    const response = await category.save();

    return res.status(201).json({ status: 'Category was created', response: response });
  } catch (err) {
    console.log('handled error: ', err);
    return res.status(500).json({ message: 'error happened' });
  }
};

const GET_ALL_CATEGORIES = async (req, res) => {
  try {
    const categories = await CategoryModel.find();

    return res.json({ categories: categories });
  } catch (err) {
    console.log('handled error: ', err);
    return res.status(500).json({ message: 'error happened' });
  }
};

export { CREATE_CATEGORY, GET_ALL_CATEGORIES };
