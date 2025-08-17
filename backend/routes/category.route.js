import express from 'express'
import { addCategory, getCategory } from '../controllers/category.controller.js';

const router = express.Router();

router.get("/all", getCategory )
router.post("/add-category", addCategory )

export default router