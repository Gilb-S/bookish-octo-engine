import React from "react";
import { Link } from "react-router";

const Home = () => {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with React & Tailwind",
      description:
        "Learn how to quickly set up a modern React app styled with Tailwind CSS.",
      author: "John Doe",
      date: "Aug 18, 2025",
      image: "https://source.unsplash.com/600x400/?code,programming",
      content:
        "Full blog post about React & Tailwind setup... (you can replace this with API content).",
    },
    {
      id: 2,
      title: "Why You Should Learn MERN Stack",
      description:
        "The MERN stack is powerful for full-stack development. Here’s why you should start learning it.",
      author: "Jane Smith",
      date: "Aug 15, 2025",
      image: "https://source.unsplash.com/600x400/?technology,laptop",
      content:
        "Longer version of the MERN stack article goes here...",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-4">
            Welcome to Blog-octo-express
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover stories, tutorials, and thoughts from developers.
          </p>
        </section>

        {/* Blog List */}
        <section className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {blog.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>

                {/* Read More Button */}
                <div className="mt-4">
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Home;
