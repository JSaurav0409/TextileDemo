import React from "react";
import { NavLink } from "react-router-dom";
import { Instagram, Twitter, Facebook, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-[#0e1012] text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* Brand & Social Section */}
          <div className="md:col-span-5 space-y-8">
            <h2 className="text-3xl font-serif italic tracking-tighter">
              Textile<span className="text-primary">Company.</span>
            </h2>
            <p className="text-slate-500 text-sm font-light leading-relaxed max-w-sm">
              Defining the standard in premium textile manufacturing through
              sustainable innovation and a heritage of craftsmanship since 2000.
            </p>
            <div className="flex gap-6">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-slate-500 hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary">
              Explore
            </h4>
            <nav className="flex flex-col gap-4">
              <NavLink
                to="/products"
                className="text-slate-400 hover:text-white transition-colors text-sm font-light"
              >
                Collections
              </NavLink>
              <NavLink
                to="/history"
                className="text-slate-400 hover:text-white transition-colors text-sm font-light"
              >
                Our Heritage
              </NavLink>
              <NavLink
                to="/sustainability"
                className="text-slate-400 hover:text-white transition-colors text-sm font-light"
              >
                Sustainability
              </NavLink>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary">
              Connect
            </h4>
            <div className="flex items-center gap-3 text-slate-400 group cursor-pointer">
              <div className="p-2 border border-white/5 rounded-full group-hover:border-primary transition-colors">
                <Mail
                  size={16}
                  className="group-hover:text-primary transition-colors"
                />
              </div>
              <span className="text-sm font-light group-hover:text-white transition-colors">
                hello@textilecompany.com
              </span>
            </div>
            <p className="text-[10px] text-slate-600 uppercase tracking-widest pt-4 leading-loose">
              Global Presence <br />
              Mumbai &bull; London &bull; New York
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.2em]">
            &copy; {currentYear} Textile Company.
          </p>

          <div className="flex gap-10">
            <NavLink
              to="/privacy-policy"
              className="text-slate-600 hover:text-white transition-colors text-[10px] uppercase tracking-widest"
            >
              Privacy
            </NavLink>
            <NavLink
              to="/terms"
              className="text-slate-600 hover:text-white transition-colors text-[10px] uppercase tracking-widest"
            >
              Terms
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
