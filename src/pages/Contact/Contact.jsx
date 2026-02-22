import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState({ loading: false, msg: "", type: "" });

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, msg: "", type: "" });
    const formData = new FormData(e.target);
    if (formData.get("botcheck")) return;

    formData.append("access_key", "2d25fac2-634b-4f92-af7e-1340431c6c7d");
    formData.append("subject", "General Contact - Textile Heritage");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((r) => r.json());

      if (res.success) {
        setStatus({
          loading: false,
          msg: "MESSAGE SENT SUCCESSFULLY",
          type: "success",
        });
        e.target.reset();
      } else {
        setStatus({ loading: false, msg: res.message, type: "error" });
      }
    } catch (err) {
      setStatus({ loading: false, msg: "TRANSMISSION ERROR", type: "error" });
    }
  };

  // Darker, high-contrast borders and text
  const inputStyles =
    "w-full bg-slate-50 border-b-2 border-slate-300 px-4 py-4 outline-none focus:border-slate-900 focus:bg-white transition-all duration-300 placeholder:text-slate-400 text-slate-900 text-base font-medium";

  return (
    <div className="min-h-screen bg-white pt-32 lg:pt-48 pb-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* --- FORM SECTION: TOP ON MOBILE --- */}
          <div className="lg:col-span-7 order-1 lg:order-2 bg-white p-8 md:p-12 rounded-lg border border-slate-200 shadow-2xl shadow-slate-100">
            <div className="mb-10">
              <h2 className="text-3xl font-serif text-slate-900 mb-2">
                Send a Message
              </h2>
              <div className="h-1 w-12 bg-slate-900"></div>
            </div>

            {status.msg && (
              <div
                className={`mb-10 p-5 text-xs font-bold uppercase tracking-widest text-center border-2 ${
                  status.type === "success"
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-red-50 text-red-700 border-red-200"
                }`}
              >
                {status.msg}
              </div>
            )}

            <form onSubmit={handleContactSubmit} className="space-y-8">
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-widest font-black text-slate-900">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className={inputStyles}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-widest font-black text-slate-900">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className={inputStyles}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest font-black text-slate-900">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="How can we help you today?"
                  required
                  rows="5"
                  className={inputStyles}
                ></textarea>
              </div>

              <button
                disabled={status.loading}
                className="w-full bg-slate-900 text-white py-5 text-xs uppercase tracking-[0.3em] font-bold transition-all hover:bg-black hover:tracking-[0.4em] active:scale-[0.98]"
              >
                {status.loading ? "PROCESSING..." : "SUBMIT INQUIRY"}
              </button>
            </form>
          </div>

          {/* --- INFO SECTION: BOTTOM ON MOBILE --- */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-12 py-4">
            <div>
              <span className="text-slate-400 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
                Communication
              </span>
              <h1 className="text-6xl md:text-7xl font-serif text-slate-900 leading-tight">
                Let's start <br /> a{" "}
                <span className="italic text-slate-400 underline decoration-slate-200 decoration-1 underline-offset-8">
                  thread.
                </span>
              </h1>
            </div>

            <div className="space-y-10 pt-10 border-t border-slate-100">
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-serif">E</span>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-slate-900 mb-1">
                    Email Us
                  </h4>
                  <p className="text-slate-600 font-medium text-lg italic">
                    studio@textileco.heritage
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-serif">A</span>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-slate-900 mb-1">
                    Our Studio
                  </h4>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    123 Artisan Row, Textile District
                    <br />
                    Mumbai, MH 400001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
