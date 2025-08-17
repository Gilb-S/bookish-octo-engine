import express from 'express'
import { addNewBlog, getAllBlog, singleBlog } from '../controllers/post.controller.js';

const router = express.Router();


// protected routes

router.get("/all", getAllBlog)
router.post("/add", addNewBlog)
router.get("/:id", singleBlog)



export default router