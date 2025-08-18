import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String
    }, 
    category: {
        type: mongoose.Schema.Types.ObjectId,
        refer: "Category"
    },
    description: {
        type: String
    },
    thumbnail : {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        refers: "User"
    }

},
    {timestamps: true}
)



export const Post = mongoose.model("Post", postSchema);