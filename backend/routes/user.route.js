import express from 'express'
import { allUser, userLogin, userRegister } from '../controllers/user.controller.js'

const router = express.Router()
router.get("/all", allUser)
router.post("/register", userRegister)
router.post("/login", userLogin)

export default router