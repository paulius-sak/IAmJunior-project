"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bookingSchema = new mongoose_1.default.Schema({
    businessId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
    },
    date: {
        type: Date,
        required: [true, 'field is required. e.g. 2022-04-28'],
    },
    time: {
        type: String,
        required: [true, 'field is required. e.g. 14:00'],
    },
    userEmail: {
        type: String,
        required: [true, 'field is required.'],
        validate: {
            validator: function (email) {
                return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message: (props) => `${props.value} is not a valid email!`,
        },
    },
    userName: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: [true, 'Booking status is required.'],
        enum: {
            values: ['confirmed', 'pending', 'cancelled'],
            message: '{VALUE} is not supported',
        },
    },
});
const Booking = mongoose_1.default.model('Booking', bookingSchema);
exports.default = Booking;
