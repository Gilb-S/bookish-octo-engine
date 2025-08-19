import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from '../config/db.js';
import blogRoutes from "../routes/blog.route.js"
import userRoutesr from '../routes/user.route.js'
import blogCategory from '../routes/category.route.js'

dotenv.config()
const port = process.env.PORT


const app = express();

//middleware
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

//routes
app.use("/api/blog", blogRoutes)
app.use("/api/user", userRoutesr)
app.use("/api/category", blogCategory)



connectDB().then(() => {
    app.listen(port, () => {
        console.log(`server is running in PORT : ${port} `)
    })
})
