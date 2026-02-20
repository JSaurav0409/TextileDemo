import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: "", type: "" });

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  // Auto-clear status message after 5 seconds
  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(
        () => setStatus({ message: "", type: "" }),
        5000,
      );
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="mb-20 text-center lg:text-left" data-aos="fade-up">
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-[11px] mb-4 block">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-slate-900 leading-tight">
            The Weave of <br />{" "}
            <span className="italic text-slate-400">Communication.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Panel */}
          <div className="lg:col-span-4 space-y-12" data-aos="fade-right">
            <div className="border-l-2 border-primary pl-8 py-2">
              <h3 className="text-sm uppercase tracking-widest font-black text-slate-900 mb-4">
                Our Studio
              </h3>
              <p className="text-slate-500 leading-relaxed italic">
                123 Textile Road, <br />
                Bhiwandi, Thane 421 302 <br />
                Mumbai, India
              </p>
            </div>

            <div className="pl-8">
              <h3 className="text-sm uppercase tracking-widest font-black text-slate-900 mb-4">
                General Inquiry
              </h3>
              <p className="text-slate-500 underline decoration-slate-200 underline-offset-8">
                hello@textilecompany.com
              </p>
              <p className="text-slate-500 mt-2">+91 98765 43210</p>
            </div>

            <div className="bg-slate-50 p-10 rounded-sm">
              <p className="text-xs text-slate-400 uppercase tracking-widest leading-loose">
                "Quality is never an accident; <br /> it is always the result{" "}
                <br /> of intelligent effort."
              </p>
            </div>
          </div>

          {/* Right Panel: The Form Wrapper */}
          <div className="lg:col-span-8 relative" data-aos="fade-left">
            {/* Loading Overlay */}
            {loading && (
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center transition-all duration-500">
                <div className="w-10 h-10 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-[10px] uppercase tracking-widest font-bold text-slate-900">
                  Transmitting...
                </p>
              </div>
            )}

            {/* CONSISTENT BRANDED STATUS MESSAGE */}
            {status.message && (
              <div
                className={`mb-10 p-6 text-[10px] font-bold uppercase tracking-[0.3em] text-center border animate-in fade-in slide-in-from-top-4 duration-500 ${
                  status.type === "success"
                    ? "bg-slate-900 text-white border-slate-900 shadow-xl"
                    : "bg-red-50 text-red-600 border-red-100"
                }`}
              >
                {status.message}
              </div>
            )}

            <div className="bg-white p-2 lg:p-10 border border-slate-100 shadow-2xl shadow-slate-200/50">
              <ContactForm
                onSubmit={(msg, type) =>
                  setStatus({ message: msg, type: type })
                }
                onLoading={setLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
