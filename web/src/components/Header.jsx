import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Moon, Sun, User } from "lucide-react"; // user icon added

const Header = () => {
  const location = useLocation();
  const [theme, setTheme] = useState("light");
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // Load theme from localStorage or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      // fallback to system
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { name: "Add blog", path: "/add-blog" },
    { name: "Add category", path: "/add-category" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Blog-octo-Express
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 items-center relative">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition ${
                location.pathname === link.path ? "font-semibold text-blue-600 dark:text-blue-400" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition"
              aria-label="User Menu"
            >
              <User size={20} className="text-gray-800 dark:text-gray-200" />
            </button>

            {/* Dropdown */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2">
                <Link
                  to="/login"
                  className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    location.pathname === "/login" ? "font-semibold text-blue-600 dark:text-blue-400" : ""
                  }`}
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    location.pathname === "/register" ? "font-semibold text-blue-600 dark:text-blue-400" : ""
                  }`}
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Dark/Light Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon size={20} className="text-gray-800" />
            ) : (
              <Sun size={20} className="text-yellow-400" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
