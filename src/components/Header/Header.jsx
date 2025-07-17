import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/closed
  };

  return (
    <header className="bg-gray-200 text-black p-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-primary">Textile Company</h1>

        {/* Hamburger Icon (Visible on mobile only) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col justify-center items-center space-y-1.5"
        >
          <div
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>

        {/* Navigation */}
        <nav
          className={`lg:flex ${
            isOpen ? "block" : "hidden"
          } lg:block absolute lg:static bg-gray-200 w-full lg:w-auto top-full left-0`}
        >
          <ul className="flex lg:flex-row flex-col lg:space-x-6 space-y-4 lg:space-y-0 text-lg px-4 py-4 lg:p-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-500 text-white px-4 py-2 rounded-full transition-all duration-300"
                    : "text-black hover:text-white hover:bg-blue-500 px-4 py-2 rounded-full transition-all duration-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-500 text-white px-4 py-2 rounded-full transition-all duration-300"
                    : "text-black hover:text-white hover:bg-blue-500 px-4 py-2 rounded-full transition-all duration-300"
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-500 text-white px-4 py-2 rounded-full transition-all duration-300"
                    : "text-black hover:text-white hover:bg-blue-500 px-4 py-2 rounded-full transition-all duration-300"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-500 text-white px-4 py-2 rounded-full transition-all duration-300"
                    : "text-black hover:text-white hover:bg-blue-500 px-4 py-2 rounded-full transition-all duration-300"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
