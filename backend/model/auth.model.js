import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  username: {type: String, required: true },
  email: {type: String,  unique: true },
  password: { type: String },
});

export const Auth = mongoose.model("User", authSchema);
