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
exports.DELETE_BOOKING_BY_ID = exports.GET_BOOKINGS_BY_EMAIL = exports.CREATE_BOOKING = void 0;
const booking_1 = __importDefault(require("../models/booking"));
const CREATE_BOOKING = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const booking = new booking_1.default({
            businessId: req.body.businessId,
            date: req.body.date,
            time: req.body.time,
            userEmail: req.body.userEmail,
            userName: req.body.userName,
            status: 'pending',
        });
        const response = yield booking.save();
        res.status(201).json({ status: 'Booking was created', response: response });
    }
    catch (err) {
        console.error('Handled error: ', err);
        res.status(500).json({ message: 'An error occurred while creating the booking.' });
    }
});
exports.CREATE_BOOKING = CREATE_BOOKING;
const GET_BOOKINGS_BY_EMAIL = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userEmail = req.params.email;
        const myBookings = yield booking_1.default.find({ userEmail: userEmail });
        if (myBookings.length === 0) {
            res.status(404).json({ message: 'No bookings found for this email.' });
            return;
        }
        res.status(200).json({ myBookings: myBookings });
    }
    catch (err) {
        console.error('Handled error: ', err);
        res.status(500).json({ message: 'An error occurred while retrieving bookings.' });
    }
});
exports.GET_BOOKINGS_BY_EMAIL = GET_BOOKINGS_BY_EMAIL;
const DELETE_BOOKING_BY_ID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteBooking = yield booking_1.default.findOneAndDelete({ _id: req.params.id });
        if (!deleteBooking) {
            res.status(404).json({ message: `Booking with id: ${req.params.id} was not found` });
            return;
        }
        res.status(200).json({ message: `Booking with id: ${req.params.id} was deleted` });
    }
    catch (err) {
        console.error('Handled error: ', err);
        res.status(500).json({ message: 'An error occurred while deleting the booking.' });
    }
});
exports.DELETE_BOOKING_BY_ID = DELETE_BOOKING_BY_ID;
