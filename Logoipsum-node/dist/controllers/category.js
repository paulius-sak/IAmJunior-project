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
exports.GET_ALL_CATEGORIES = exports.CREATE_CATEGORY = void 0;
const category_1 = __importDefault(require("../models/category"));
const CREATE_CATEGORY = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = new category_1.default({
            name: req.body.name,
            color: req.body.color,
            url: req.body.url,
        });
        const response = yield category.save();
        res.status(201).json({ status: 'Category was created', response: response });
    }
    catch (err) {
        console.log('handled error: ', err);
        res.status(500).json({ message: 'error happened' });
        return;
    }
});
exports.CREATE_CATEGORY = CREATE_CATEGORY;
const GET_ALL_CATEGORIES = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield category_1.default.find();
        res.json({ categories: categories });
    }
    catch (err) {
        console.log('handled error: ', err);
        res.status(500).json({ message: 'error happened' });
        return;
    }
});
exports.GET_ALL_CATEGORIES = GET_ALL_CATEGORIES;
