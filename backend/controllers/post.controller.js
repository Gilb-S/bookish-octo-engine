import {Post} from '../model/post.model.js'


// public blog

export const publicBlogs = async (req, res) => {
    try {
        const fetchPublicBlogs = await Post.find({}).sort({"createdAt": -1})
        return res.status(200).json(fetchPublicBlogs)
    } catch (error) {
        return res.status(500).json({message: erro.message})
    }
}



export const getAllBlog = async (req, res) =>  {

    try {
        const fetchAllBlog = await Post.find({user: req.user._id}).sort({"createdAt": -1})
        return res.status(200).json(fetchAllBlog)
        
    } catch (error) {
        return res.status(500).json({message: error.message})    
    }
}



export const addNewBlog = async (req, res) => {
    const {title, category, description} = req.body;
    try {
        if(!title || !category || !description){
            return res.status(400).json({message: "all fields are required"})
        }

        const addBlog = new Post({
            title: title,
            category: category,
            description: description,
            thumbnail: req.file.filename ,
            user: req.user._id,
        })

        const savedBlog = await addBlog.save()

        if(savedBlog){
            return res.status(201).json({message: "Blog Added successfully",  blog: savedBlog,})
        }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }   
}

export const singleBlog = async (req, res) => {
   const {id} = req.params;

   try {
    if(!id) {
        return res.status(400).json({message: "invalid id or url"})
    }

    const fetchBlogsByID = await Post.findById(id);

    return res.status(200).json(fetchBlogsByID) 
   } catch (error) {
    return res.status(500).json({message: error.message})
   }
}