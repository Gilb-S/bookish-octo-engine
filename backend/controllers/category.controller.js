import {category} from "../model/category.model.js"

export const getCategory = async (req, res) => {
    try {
        const fetchAllCategories = await category.find({})
        return res.status(200).json(fetchAllCategories)
        
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
} 

export const addCategory = async (req, res) => {
    const {title} = req.body;

    try {
        if(!title){
            return res.status(400).json({message: "enter title category"})
        }

        const newCategory = new category({
            title,
        })

        
        const existing = await category.findOne({ title });
        if (existing) {
          return res.status(409).json({ message: "Category already exists" });
        }    
        const savedCategory = await newCategory.save();

        return res.status(201).json({
            message: "Category added successfully",
            category: savedCategory,
          });
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}