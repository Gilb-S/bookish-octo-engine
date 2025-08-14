import { Auth } from "../model/auth.model.js";
import bcryptjs from 'bcryptjs'



export const allUser = async (req, res) => {
    try {
        const user = await Auth.find();
        return res.status(201).json(user)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

export const userRegister = async(req, res) => {
  const {email, password, username} = req.body;
    // check fields
  try {
    if(!email || !password || !username){
        return res.status(400).json({message: "all fields are required"})
      }
      // check is exist
      const isUser = await Auth.findOne({email: email})
      if(isUser){
        return res.status(409).json({message: "email already exist"})
      }
        

        // hashed pass
        const hashedPassword = await bcryptjs.hash(password, 10);

        // save user
        
        const newUser = new Auth({
            email,
            username,
            password: hashedPassword,
        })

        await newUser.save();

        return res.status(201).json({
            message: "user registered successfull",
            user: newUser,
        })

  } catch (error) {
    return res.status(400).json({message: error.message})
  }
}


export const userLogin = async(req, res) => {

}


