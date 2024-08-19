import BusinessModel from '../models/business.js';

const CREATE_BUSINESS = async (req, res) => {
  try {
    const business = new BusinessModel({
      name: req.body.name,
      about: req.body.about,
      address: req.body.address,
      category: req.body.category,
      contactPerson: req.body.contactPerson,
      email: req.body.email,
      images: req.body.images.map((img) => ({ url: img.url })),
      user_id: req.body.id,
    });

    const response = await business.save();

    return res.status(201).json({ status: 'Business was created', response: response });
  } catch (err) {
    console.log('handled error: ', err);
    return res.status(500).json({ message: 'error happened' });
  }
};

const GET_ALL_BUSINESSES = async (req, res) => {
  try {
    const businesses = await BusinessModel.find();

    return res.json({ businesses: businesses });
  } catch (err) {
    console.log('handled error: ', err);
    return res.status(500).json({ message: 'error happened' });
  }
};

const GET_BUSINESS_BY_ID = async (req, res) => {
  try {
    const business = await BusinessModel.findOne({ id: req.params.id });

    if (!business) {
      return res.status(404).json({
        message: `Business with id: ${req.params.id} was not found`,
      });
    }

    return res.json({ business: business });
  } catch (err) {
    console.log('handled error: ', err);
    return res.status(500).json({ message: 'error happened' });
  }
};

const GET_BUSINESSES_BY_CATEGORY = async (req, res) => {
  try {
    const category = req.params.category;
    const businesses = await BusinessModel.find({ category: category });

    if (businesses.length === 0) {
      return res.status(404).json({
        message: `No businesses found in category: ${category}`,
      });
    }

    return res.json({ businesses: businesses });
  } catch (err) {
    console.log('handled error: ', err);
    return res.status(500).json({ message: 'error happened' });
  }
};

const UPDATE_BUSINESS = async (req, res) => {
  try {
    const updatedBusiness = await BusinessModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedBusiness) {
      return res.status(404).json({
        message: `Business with id: ${req.params.id} was not found`,
      });
    }

    return res.json({
      status: 'Business was updated',
      business: updatedBusiness,
    });
  } catch (err) {
    console.log('handled error: ', err);
    return res.status(500).json({ message: 'An error occurred while updating the business' });
  }
};

export { CREATE_BUSINESS, GET_ALL_BUSINESSES, GET_BUSINESS_BY_ID, GET_BUSINESSES_BY_CATEGORY, UPDATE_BUSINESS };
