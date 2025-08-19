import React, { useState } from "react";
import { motion } from "framer-motion";

const AddPost = () => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // here you’ll handle sending formData to your backend
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8"
      >
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
          Create New Blog Post
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter blog title"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Category
            </label>
            <select
              name="category"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option disabled>Select category</option>
             
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows="6"
              placeholder="Write your blog here..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* Thumbnail */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Thumbnail
            </label>
            <input
              type="file"
              name="thumbnail"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500 
                file:mr-4 file:py-2 file:px-4 
                file:rounded-lg file:border-0 
                file:text-sm file:font-semibold 
                file:bg-blue-50 file:text-blue-600 
                hover:file:bg-blue-100"
              required
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-4 w-full h-64 object-cover rounded-lg shadow"
              />
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Publish Post
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AddPost;
