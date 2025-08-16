import { Auth } from "../model/auth.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const allUser = async (req, res) => {
  try {
    const user = await Auth.find();
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const userRegister = async (req, res) => {
  const { email, password, username } = req.body;
  // check fields
  try {
    if (!email || !password || !username) {
      return res.status(400).json({ message: "all fields are required" });
    }
    // check is exist
    const isUser = await Auth.findOne({ email: email });
    if (isUser) {
      return res.status(409).json({ message: "email already exist" });
    }

    // hashed pass
    const hashedPassword = await bcryptjs.hash(password, 10);

    // save user

    const newUser = new Auth({
      email,
      username,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).json({
      message: "user registered successfull",
      user: newUser,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "all fields required" });
    }

    const isUser = await Auth.findOne({ email });
    if (!isUser) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcryptjs.compare(password, isUser.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    // generate token

    // const token = jwt.sign({userID: isUser._id}, process.env.JWT_SECRET, {
    //   expireIn: "1d"
    // })

    const token = jwt.sign(
      { id: isUser._id, email: isUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(201).json({ message: "Logged in success", token, name: isUser.username });
  } catch (error) {
    console.log("error", error);
    return res.status(400).json({ message: error.message });
  }
};
