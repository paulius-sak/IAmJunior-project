"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const business_1 = require("../controllers/business");
const auth_1 = __importDefault(require("../middleware/auth"));
const router = express_1.default.Router();
router.post('/businesses', auth_1.default, business_1.CREATE_BUSINESS);
router.get('/businesses', business_1.GET_ALL_BUSINESSES);
router.get('/businesses/:id', business_1.GET_BUSINESS_BY_ID);
router.get('/businesses/category/:category', business_1.GET_BUSINESSES_BY_CATEGORY);
router.put('/businesses/:id', auth_1.default, business_1.UPDATE_BUSINESS);
exports.default = router;
