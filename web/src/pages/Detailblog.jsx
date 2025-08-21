import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const DetailBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("You must be logged in to view this blog");
        }

        const res = await fetch(`http://localhost:5001/api/blog/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch blog");
        }

        const data = await res.json();
        setBlog(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBlog();
  }, [id]);

  if (error)
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-red-600 dark:text-red-400">{error}</p>
      </main>
    );

  if (!blog)
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-gray-600 dark:text-gray-300">Loading blog...</p>
      </main>
    );

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          to="/home"
          className="inline-block mb-6 text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to Blogs
        </Link>

        {/* Blog Thumbnail */}
        {blog.thumbnail && (
          <img
            src={`http://localhost:5001/uploads/${blog.thumbnail}`} // ✅ FIXED PATH
            alt={blog.title}
            className="w-full h-72 object-cover rounded-2xl shadow-lg mb-6"
          />
        )}

        {/* Blog Info */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
          {blog.title}
        </h1>

        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-6 text-sm">
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
