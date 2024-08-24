"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const booking_1 = require("../controllers/booking");
const auth_1 = __importDefault(require("../middleware/auth"));
const router = express_1.default.Router();
router.post('/bookings', auth_1.default, booking_1.CREATE_BOOKING);
router.get('/bookings/user/:email', auth_1.default, booking_1.GET_BOOKINGS_BY_EMAIL);
router.delete('/bookings/:id', auth_1.default, booking_1.DELETE_BOOKING_BY_ID);
exports.default = router;
