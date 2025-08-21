import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import toast from 'react-hot-toast'
import { useNavigate } from "react-router";
const AddCategory = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 👉 Send `title` to your backend API here
    //console.log("Category submitted:", title);

    try {
      const res = await axios.post(
        "http://localhost:5001/api/category/add-category",
        input,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success(res.data.message);
      navigate("/home");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
      >
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
          Add New Category
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Category Title */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Category Title
            </label>
            <input
              type="text"
              name="title"
              value={input.title}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              placeholder="Enter category title"
             
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Save Category
          </button>
        </form>
      </motion.div>
    </main>
  );
};

export default AddCategory;
