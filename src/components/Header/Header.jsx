import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Clean, consistent link styles for Desktop
  const linkStyles = ({ isActive }) =>
    `relative px-4 py-2 transition-all duration-300 text-[11px] uppercase tracking-[0.3em] font-bold ${
      isActive
        ? "text-primary border-b-2 border-primary"
        : "text-slate-900 hover:text-primary"
    }`;

  return (
    <header className="fixed top-0 w-full z-[100] bg-white border-b border-slate-100 shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        {/* --- LOGO --- */}
        <Link
          to="/"
          className="group flex flex-col items-start"
          onClick={() => setIsOpen(false)}
        >
          <h1 className="text-2xl font-serif font-bold text-slate-900 tracking-tight leading-none">
            TEX
            <span className="text-primary italic">TILE</span>
          </h1>
          <span className="text-[10px] tracking-[0.3em] uppercase text-slate-500 group-hover:text-primary transition-colors">
            Co. Heritage
          </span>
        </Link>

        {/* --- DESKTOP NAV --- */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-2">
            <li>
              <NavLink to="/" className={linkStyles}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={linkStyles}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={linkStyles}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={linkStyles}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* --- DESKTOP INQUIRY BUTTON (MATCHED STYLE) --- */}
        <div className="hidden lg:block">
          <button
            onClick={() => navigate("/contact")}
            className="group relative isolate border border-slate-900 px-8 py-2.5 overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-900 group-hover:text-white transition-colors duration-300">
              Inquiry
            </span>
            <div className="absolute inset-0 z-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <button
          onClick={toggleMenu}
          className="lg:hidden z-50 p-2 text-slate-900 focus:outline-none"
        >
          <div className="w-6 space-y-1.5">
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>

        {/* --- MOBILE OVERLAY --- */}
        <div
          className={`
          fixed inset-0 bg-white z-40 flex flex-col items-center justify-center
          transition-all duration-500 ease-in-out lg:hidden
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        >
          <ul className="flex flex-col items-center space-y-8">
            {["Home", "Products", "About", "Contact"].map((item) => (
              <li key={item}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-serif italic text-slate-900 hover:text-primary transition-colors"
                >
                  {item}
                </NavLink>
              </li>
            ))}

            {/* --- RE-DESIGNED MOBILE INQUIRE BUTTON --- */}
            <li className="pt-12">
              <div className="group relative inline-block">
                <button
                  onClick={() => {
                    navigate("/contact");
                    setIsOpen(false);
                  }}
                  className="isolate relative z-10 px-16 py-6 bg-slate-900 text-white text-[11px] font-bold uppercase tracking-[0.5em] overflow-hidden transition-colors duration-500 hover:text-slate-900"
                >
                  {/* Rising Tide Fill */}
                  <div className="absolute inset-0 z-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

                  {/* Button Text */}
                  <span className="relative z-20">Inquire Now</span>
                </button>

                {/* Decorative Editorial Line */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-primary/30 group-hover:h-16 transition-all duration-700" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
