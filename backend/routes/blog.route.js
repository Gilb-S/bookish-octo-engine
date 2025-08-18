import express from 'express'
import { addNewBlog, getAllBlog, singleBlog } from '../controllers/post.controller.js';
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

// protected routes

router.get("/all", checkIsUserAuthenticated, getAllBlog)
router.post("/add", upload.single("thumbnail"), checkIsUserAuthenticated,addNewBlog)
router.get("/:id",checkIsUserAuthenticated, singleBlog)



export default router