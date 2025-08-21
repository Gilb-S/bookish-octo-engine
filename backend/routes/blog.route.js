import express from 'express'
import { addNewBlog, getAllBlog, singleBlog, publicBlogs } from '../controllers/post.controller.js';
import multer from "multer"
import checkIsUserAuthenticated from '../middleware/auth.middleware.js';

//multer config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `public/upload/`)
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({storage: storage})

const router = express.Router();

// public routes 
router.get("/public", publicBlogs)


// protected routes
router.get("/all", checkIsUserAuthenticated, getAllBlog)
router.post("/add", checkIsUserAuthenticated, upload.single("thumbnail"),addNewBlog)
router.get("/:id",checkIsUserAuthenticated, singleBlog)



export default router