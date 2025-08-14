import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    title: {
        type: String
    },
})


export const category = mongoose.model("Category" , categorySchema);