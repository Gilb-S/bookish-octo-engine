import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String
    }, 
    category: {
        type: mongoose.Schema.Types.ObjectId,
        refer: "category"
    },
    description: {
        type: String
    },
    thumbnail : {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        refers: "users"
    }

},
    {timestamp: true}
)



export const Post = mongoose.model("Post", postSchema);