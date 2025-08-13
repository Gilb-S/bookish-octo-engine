import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from '../config/db.js';
import blogRoutes from '../routes/user.route.js';
import userRoutes from '../routes/blog.route.js';

dotenv.config()
const port = process.env.PORT


const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/user", blogRoutes)
app.use("/api/blog", userRoutes)



connectDB().then(() => {
    app.listen(port, () => {
        console.log(`server is running in PORT : ${port} `)
    })
})
