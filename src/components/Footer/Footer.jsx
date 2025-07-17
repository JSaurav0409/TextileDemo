import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm sm:text-base md:text-lg">
          &copy; 2025 Textile Company. All rights reserved.
        </p>
        <div className="mt-4">
          <NavLink
            to="/privacy-policy"
            className="text-white hover:text-gray-400 mx-2 text-xs sm:text-sm md:text-base"
          >
            Privacy Policy
          </NavLink>
          <a
            href="#"
            className="text-white hover:text-gray-400 mx-2 text-xs sm:text-sm md:text-base"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
