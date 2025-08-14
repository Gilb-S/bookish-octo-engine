import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from '../config/db.js';
import blogRoutes from "../routes/blog.route.js"
import userRoutesr from '../routes/user.route.js'

dotenv.config()
const port = process.env.PORT


const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/blog", blogRoutes)
app.use("/api/user", userRoutesr)



connectDB().then(() => {
    app.listen(port, () => {
        console.log(`server is running in PORT : ${port} `)
    })
})
