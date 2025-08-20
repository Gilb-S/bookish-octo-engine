import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const token = localStorage.getItem("token"); // get JWT from localStorage
        if (!token) {
          setError("No token found. Please login first.");
          setLoading(false);
          return;
        }

        const res = await axios.get("http://localhost:5001/api/blog/all", {
          headers: {
            "Authorization": `Bearer ${token}`, // send token
          },
          withCredentials: true,
        });

        setBlogs(res.data);
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchAllBlogs();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
            Welcome to Blog-octo-express 🚀
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover stories, tutorials, and thoughts from developers.
          </p>
        </section>

        {/* States */}
        {loading ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Loading blogs...
          </p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : blogs.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No blogs available yet. Be the first to share your story!
          </p>
        ) : (
          <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition transform"
              >
                {/* Blog Thumbnail */}
                <img
                  src={
                    blog.thumbnail
                      ? `http://localhost:5001/uploads/${blog.thumbnail}`
                      : "https://source.unsplash.com/600x400/?blog,writing"
                  }
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />

                {/* Blog Content */}
                <div className="p-5 flex flex-col h-full">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                    {blog.description}
                  </p>

                  {/* Metadata (only date) */}
                  <div className="flex items-center justify-between mt-4 text-xs text-gray-500 dark:text-gray-400">
                    <span>
                      📅 {new Date(blog.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  {/* Read More */}
                  <div className="mt-4">
                    <Link
                      to={`/blog/${blog._id}`}
                      className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
    </main>
  );
};

export default Home;
