import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    username: {String, required: true},
    email: {String, required: true, unique: true},
    password: {String, required: true} 
})

export const auth = new mongoose.Schema("users", authSchema)
