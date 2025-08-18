import express from 'express'
import { addCategory, getCategory } from '../controllers/category.controller.js';
import checkIsUserAuthenticated from '../middleware/auth.middleware.js';

const router = express.Router();

router.get("/all", checkIsUserAuthenticated, getCategory )
router.post("/add-category",checkIsUserAuthenticated, addCategory )

export default router