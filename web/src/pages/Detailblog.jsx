import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const DetailBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:5001/api/blog/${id}`);
        if (!res.ok) throw new Error("Failed to fetch blog");

        const data = await res.json();
        setBlog(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBlog();
  }, [id]);

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-red-600 dark:text-red-400">{error}</p>
      </main>
    );
  }

  if (!blog) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-gray-600 dark:text-gray-300">Loading blog...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-block mb-6 text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to Blogs
        </Link>

        {/* Blog Thumbnail */}
        <motion.img
          src={
            blog.thumbnail
              ? `http://localhost:5001/${blog.thumbnail}`
              : "https://source.unsplash.com/900x400/?blog"
          }
          alt={blog.title}
          className="w-full h-72 object-cover rounded-2xl shadow-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Blog Info */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
          {blog.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-6 text-sm">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
            {blog.category || "Uncategorized"}
          </span>
          <span>✍️ {blog.user?.username || "Anonymous"}</span>
          <span>
            📅 {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : ""}
          </span>
        </div>

        {/* Blog Content */}
        <div className="prose dark:prose-invert max-w-none leading-relaxed text-gray-700 dark:text-gray-300">
          <p>{blog.description}</p>
        </div>
      </div>
    </main>
  );
};

export default DetailBlog;
