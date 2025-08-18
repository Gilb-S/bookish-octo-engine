import express from 'express'
import { addCategory, getCategory } from '../controllers/category.controller.js';
import checkIsUserAuthenticated from '../middleware/auth.middleware.js';
// import multer from 'multer';

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, `public/upload/`)
//     },
//     filename: function (req, file, cb) {
//         cb(null, `${Date.now()}-${file.originalname}`)
//     }
// })

// const upload = multer({storage: storage})
const router = express.Router();

router.get("/all", checkIsUserAuthenticated, getCategory )
router.post("/add-category",checkIsUserAuthenticated, addCategory )

export default router