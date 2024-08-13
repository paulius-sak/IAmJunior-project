import express from "express";
import { CREATE_CATEGORY, GET_ALL_CATEGORIES } from "../controllers/category.js";

const router = express.Router()

router.post("/categories", CREATE_CATEGORY)
router.get("/categories", GET_ALL_CATEGORIES)

export default router