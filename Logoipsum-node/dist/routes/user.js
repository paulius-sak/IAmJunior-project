"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_js_1 = require("../controllers/user.js");
const auth_1 = __importDefault(require("../middleware/auth"));
const router = express_1.default.Router();
router.post('/users', user_js_1.SIGN_UP);
router.post('/users/login', user_js_1.LOGIN);
router.get('/users', auth_1.default, user_js_1.GET_ALL_USERS);
router.get('/users/:id', auth_1.default, user_js_1.GET_USERS_BY_ID);
router.delete('/users/:id', auth_1.default, user_js_1.DELETE_USER);
router.put('/users/:id', auth_1.default, user_js_1.UPDATE_USER);
exports.default = router;
