import express from "express";
import {CREATE_BUSINESS, GET_ALL_BUSINESSES, GET_BUSINESS_BY_ID, GET_BUSINESSES_BY_CATEGORY} from "../controllers/business.js"

const router = express.Router()

router.post("/businesses", CREATE_BUSINESS)
router.get("/businesses", GET_ALL_BUSINESSES)
router.get("/businesses/:id", GET_BUSINESS_BY_ID)
router.get("/businesses/category/:category", GET_BUSINESSES_BY_CATEGORY)

export default router