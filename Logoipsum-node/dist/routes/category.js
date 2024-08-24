"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_1 = require("../controllers/category");
const auth_1 = __importDefault(require("../middleware/auth"));
const router = express_1.default.Router();
router.post('/categories', auth_1.default, category_1.CREATE_CATEGORY);
router.get('/categories', auth_1.default, category_1.GET_ALL_CATEGORIES);
exports.default = router;
