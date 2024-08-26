import BusinessModel from '../models/business';
import { Request, Response } from 'express';

interface Image {
  url: string;
}

interface CreateBusinessRequestBody {
  name: string;
  about: string;
  address: string;
  category: string;
  contactPerson: string;
  email: string;
  images: Image[];
  id: string;
}

const CREATE_BUSINESS = async (req: Request<{}, {}, CreateBusinessRequestBody>, res: Response): Promise<void> => {
  try {
    const business = new BusinessModel({
      name: req.body.name,
      about: req.body.about,
      address: req.body.address,
      category: req.body.category,
      contactPerson: req.body.contactPerson,
      email: req.body.email,
      images: req.body.images,
      user_id: req.body.id,
    });

    const response = await business.save();

    res.status(201).json({ status: 'Business was created', response: response });
  } catch (err) {
    console.log('handled error: ', err);
    res.status(500).json({ message: 'Error happened' });
  }
};

const GET_ALL_BUSINESSES = async (req: Request, res: Response): Promise<void> => {
  try {
    const businesses = await BusinessModel.find();

    res.json({ businesses: businesses });
  } catch (err) {
    console.log('handled error: ', err);
    res.status(500).json({ message: 'Error happened' });
  }
};

const GET_BUSINESS_BY_ID = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  try {
    const business = await BusinessModel.findOne({ _id: req.params.id });

    if (!business) {
      res.status(404).json({
        message: `Business with id: ${req.params.id} was not found`,
      });
      return; 
    }

    res.json({ business: business });
  } catch (err) {
    console.log('handled error: ', err);
    res.status(500).json({ message: 'Error happened' });
  }
};

const GET_BUSINESSES_BY_CATEGORY = async (req: Request<{ category: string }>, res: Response): Promise<void> => {
  try {
    const category = req.params.category;
    const businesses = await BusinessModel.find({ category: category });

    if (businesses.length === 0) {
      res.status(404).json({
        message: `No businesses found in category: ${category}`,
      });
      return;
    }

    res.json({ businesses: businesses });
  } catch (err) {
    console.log('handled error: ', err);
    res.status(500).json({ message: 'Error happened' });
  }
};

const UPDATE_BUSINESS = async (req: Request<{ id: string }, {}, Partial<CreateBusinessRequestBody>>, res: Response): Promise<void> => {
  try {
    const updatedBusiness = await BusinessModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedBusiness) {
      res.status(404).json({
        message: `Business with id: ${req.params.id} was not found`,
      });
      return;
    }

    res.json({
      status: 'Business was updated',
      business: updatedBusiness,
    });
  } catch (err) {
    console.log('handled error: ', err);
    res.status(500).json({ message: 'An error occurred while updating the business' });
  }
};

export { CREATE_BUSINESS, GET_ALL_BUSINESSES, GET_BUSINESS_BY_ID, GET_BUSINESSES_BY_CATEGORY, UPDATE_BUSINESS };