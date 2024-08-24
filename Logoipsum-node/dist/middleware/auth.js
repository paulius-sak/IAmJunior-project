"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ message: 'User is not authenticated' });
        return;
    }
    try {
        const token = authHeader.split(' ')[1];
        const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.currentUser = payload.user;
        next();
    }
    catch (err) {
        console.error('Authentication error: ', err);
        res.status(401).json({ message: 'Invalid or expired token' });
        return;
    }
};
exports.default = auth;
