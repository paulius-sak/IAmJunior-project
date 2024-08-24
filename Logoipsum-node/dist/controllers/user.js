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
exports.UPDATE_USER = exports.DELETE_USER = exports.GET_USERS_BY_ID = exports.GET_ALL_USERS = exports.LOGIN = exports.SIGN_UP = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../models/user"));
const SIGN_UP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingUser = yield user_1.default.findOne({ email: req.body.email });
        if (existingUser) {
            res.status(400).json({ message: 'Email is already registered' });
            return;
        }
        const salt = yield bcryptjs_1.default.genSalt(10);
        const hash = yield bcryptjs_1.default.hash(req.body.password, salt);
        const user = new user_1.default({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            password: hash,
        });
        const response = yield user.save();
        res.status(201).json({ status: 'User sign-up successful', response: response });
    }
    catch (err) {
        console.log('handled error: ', err);
        res.status(500).json({ message: 'error happened' });
        return;
    }
});
exports.SIGN_UP = SIGN_UP;
const LOGIN = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findOne({ email: req.body.email });
        if (!user) {
            res.status(400).json({ message: 'Invalid email or password' });
            return;
        }
        const isMatch = yield bcryptjs_1.default.compare(req.body.password, user.password);
        if (!isMatch) {
            res.status(400).json({ message: 'Invalid email or password' });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ user: { _id: user._id, name: user.name, email: user.email } }, process.env.JWT_SECRET, {
            expiresIn: '24h',
        });
        res.status(200).json({
            message: 'Login successful',
            token: token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    }
    catch (err) {
        console.log('Handled error: ', err);
        res.status(500).json({ message: 'An error occurred during login' });
        return;
    }
});
exports.LOGIN = LOGIN;
const GET_ALL_USERS = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.default.find().select('-password');
        res.json({ users: users });
    }
    catch (err) {
        console.log('handled error: ', err);
        res.status(500).json({ message: 'error happened' });
        return;
    }
});
exports.GET_ALL_USERS = GET_ALL_USERS;
const GET_USERS_BY_ID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findOne({ _id: req.params.id }).select('-password');
        if (!user) {
            res.status(404).json({
                message: `User with id: ${{ _id: req.params.id }} was not found`,
            });
            return;
        }
        res.json({ user: user });
    }
    catch (err) {
        console.log('handled error: ', err);
        res.status(500).json({ message: 'error happened' });
        return;
    }
});
exports.GET_USERS_BY_ID = GET_USERS_BY_ID;
const DELETE_USER = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findOneAndDelete({ _id: req.params.id });
        if (!user) {
            res.status(404).json({
                message: `User with id: ${{ _id: req.params.id }} was not found`,
            });
            return;
        }
        res.status(200).json({
            message: `User with id: ${{ _id: req.params.id }} has been deleted successfully`,
        });
    }
    catch (err) {
        console.log('handled error: ', err);
        res.status(500).json({ message: 'error happened' });
        return;
    }
});
exports.DELETE_USER = DELETE_USER;
const UPDATE_USER = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, age, email, password } = req.body;
        const user = yield user_1.default.findById({ _id: req.params.id });
        if (!user) {
            res.status(404).json({
                message: `User with id: ${{ _id: req.params.id }} was not found`,
            });
            return;
        }
        name && (user.name = name);
        age && (user.age = age);
        email && (user.email = email);
        if (password) {
            const salt = yield bcryptjs_1.default.genSalt(10);
            user.password = yield bcryptjs_1.default.hash(password, salt);
        }
        const updatedUser = yield user.save();
        res.status(200).json({
            message: `User with id: ${req.params.id} has been updated successfully`,
            user: updatedUser,
        });
    }
    catch (err) {
        console.log('Handled error: ', err);
        res.status(500).json({ message: 'An error occurred during the update' });
        return;
    }
});
exports.UPDATE_USER = UPDATE_USER;
