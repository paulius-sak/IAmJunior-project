"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_BUSINESS = exports.GET_BUSINESSES_BY_CATEGORY = exports.GET_BUSINESS_BY_ID = exports.GET_ALL_BUSINESSES = exports.CREATE_BUSINESS = void 0;
const business_1 = __importDefault(require("../models/business"));
const CREATE_BUSINESS = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const business = new business_1.default({
            name: req.body.name,
            about: req.body.about,
            address: req.body.address,
            category: req.body.category,
            contactPerson: req.body.contactPerson,
            email: req.body.email,
            images: req.body.images.map((img) => ({ url: img.url })),
            user_id: req.body.id,
        });
        const response = yield business.save();
        res.status(201).json({ status: 'Business was created', response: response });
    }
    catch (err) {
        console.log('handled error: ', err);
        res.status(500).json({ message: 'Error happened' });
    }
});
exports.CREATE_BUSINESS = CREATE_BUSINESS;
const GET_ALL_BUSINESSES = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const businesses = yield business_1.default.find();
        res.json({ businesses: businesses });
    }
    catch (err) {
        console.log('handled error: ', err);
        res.status(500).json({ message: 'Error happened' });
    }
});
exports.GET_ALL_BUSINESSES = GET_ALL_BUSINESSES;
const GET_BUSINESS_BY_ID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const business = yield business_1.default.findOne({ _id: req.params.id });
        if (!business) {
            res.status(404).json({
                message: `Business with id: ${req.params.id} was not found`,
            });
            return;
        }
        res.json({ business: business });
    }
    catch (err) {
        console.log('handled error: ', err);
        res.status(500).json({ message: 'Error happened' });
    }
});
exports.GET_BUSINESS_BY_ID = GET_BUSINESS_BY_ID;
const GET_BUSINESSES_BY_CATEGORY = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = req.params.category;
        const businesses = yield business_1.default.find({ category: category });
        if (businesses.length === 0) {
            res.status(404).json({
                message: `No businesses found in category: ${category}`,
            });
            return;
        }
        res.json({ businesses: businesses });
    }
    catch (err) {
        console.log('handled error: ', err);
        res.status(500).json({ message: 'Error happened' });
    }
});
exports.GET_BUSINESSES_BY_CATEGORY = GET_BUSINESSES_BY_CATEGORY;
const UPDATE_BUSINESS = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedBusiness = yield business_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
    }
    catch (err) {
        console.log('handled error: ', err);
        res.status(500).json({ message: 'An error occurred while updating the business' });
    }
});
exports.UPDATE_BUSINESS = UPDATE_BUSINESS;
