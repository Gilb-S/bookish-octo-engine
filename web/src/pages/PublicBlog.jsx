import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const PublicBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5001/api/blog/public"
        );
        setBlogs(res.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };

    fetchBlogs();
  }, []);

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-red-600 dark:text-red-400">{error}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          Latest Public Blogs
        </h1>

        {blogs.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">
            No blogs available yet.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <motion.div
                key={blog._id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Thumbnail */}
                <img
                  src={
                    blog.thumbnail
                      ? `http://localhost:5001/uploads/${blog.thumbnail}`
                      : "https://source.unsplash.com/400x200/?blog"
                  }
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-5 flex flex-col flex-grow">
                

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {blog.title}
                  </h2>

                  {/* Short Description */}
                  <p className="text-gray-600 dark:text-gray-400 flex-grow">
                    {blog.description?.slice(0, 100)}...
                  </p>

                  {/* Footer (Author + Date) */}
                  <div className="mt-4 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">

                    <span>
                      📅{" "}
                      {blog.createdAt
                        ? new Date(blog.createdAt).toLocaleDateString()
                        : ""}
                    </span>
                  </div>

                  {/* Read More */}
                  <Link
                    to={`/home/blog/${blog._id}`}
                    className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default PublicBlog;
