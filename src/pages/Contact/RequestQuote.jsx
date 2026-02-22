import React, { useState } from "react";

const RequestQuote = () => {
  const [status, setStatus] = useState({ loading: false, msg: "", type: "" });

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, msg: "", type: "" });
    const formData = new FormData(e.target);
    if (formData.get("botcheck")) return;

    formData.append("access_key", "2d25fac2-634b-4f92-af7e-1340431c6c7d");
    formData.append("subject", `Procurement: ${formData.get("company")}`);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((r) => r.json());

      if (res.success) {
        setStatus({
          loading: false,
          msg: "QUOTE REQUEST LOGGED SUCCESSFULLY",
          type: "success",
        });
        e.target.reset();
      } else {
        setStatus({ loading: false, msg: res.message, type: "error" });
      }
    } catch (err) {
      setStatus({ loading: false, msg: "NETWORK ERROR", type: "error" });
    }
  };

  const labelStyles =
    "text-[11px] uppercase tracking-widest font-black text-slate-900 block mb-2";

  const inputStyles =
    "w-full bg-slate-50 border border-slate-300 px-4 py-4 outline-none focus:border-slate-900 focus:bg-white transition-all text-slate-900 font-medium placeholder:text-slate-400 text-sm rounded-none appearance-none";

  return (
    <div className="min-h-screen bg-slate-50/30 pt-32 lg:pt-48 pb-20">
      <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
        <div className="bg-white border border-slate-200 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* --- FORM SECTION: TOP ON MOBILE --- */}
            <div className="lg:col-span-8 p-6 md:p-14 order-1 lg:order-2">
              <div className="mb-10">
                <h2 className="text-3xl font-serif text-slate-900 mb-2">
                  Specifications
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

              <form
                onSubmit={handleQuoteSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              >
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                />

                {/* Point of Contact - Fixed Width */}
                <div className="col-span-1">
                  <label className={labelStyles}>Point of Contact</label>
                  <input
                    type="text"
                    name="quote_name"
                    placeholder="Contact Name"
                    required
                    className={inputStyles}
                  />
                </div>

                {/* Enterprise - Fixed Width */}
                <div className="col-span-1">
                  <label className={labelStyles}>Enterprise</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    required
                    className={inputStyles}
                  />
                </div>

                {/* Business Email */}
                <div className="col-span-1">
                  <label className={labelStyles}>Business Email</label>
                  <input
                    type="email"
                    name="quote_email"
                    placeholder="email@enterprise.com"
                    required
                    className={inputStyles}
                  />
                </div>

                {/* Fabric Type */}
                <div className="col-span-1">
                  <label className={labelStyles}>Fabric Type</label>
                  <div className="relative">
                    <select
                      name="material_type"
                      required
                      className={`${inputStyles} cursor-pointer pr-10`}
                    >
                      <option value="">Select Material</option>
                      <option value="Premium Cotton">Premium Cotton</option>
                      <option value="Raw Silk">Raw Silk</option>
                      <option value="Linen Blend">Linen Blend</option>
                    </select>
                    {/* Custom Arrow for consistency */}
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Volume & Specifications - Full Width */}
                <div className="col-span-1 md:col-span-2">
                  <label className={labelStyles}>Volume & Specifications</label>
                  <textarea
                    name="quote_message"
                    placeholder="Quantity (m), Dimensions, Finish details..."
                    required
                    rows="4"
                    className={inputStyles}
                  ></textarea>
                </div>

                <div className="col-span-1 md:col-span-2 flex justify-end pt-4">
                  <button
                    disabled={status.loading}
                    className="w-full bg-slate-900 text-white px-12 py-5 text-xs uppercase tracking-[0.3em] font-bold transition-all hover:bg-black hover:tracking-[0.4em] active:scale-[0.98] shadow-xl shadow-slate-200"
                  >
                    {status.loading
                      ? "PROCESSING..."
                      : "GENERATE QUOTE REQUEST"}
                  </button>
                </div>
              </form>
            </div>

            {/* --- SIDEBAR INFO --- */}
            <div className="lg:col-span-4 bg-slate-900 p-10 md:p-14 text-white order-2 lg:order-1 flex flex-col justify-between min-h-[400px]">
              <div>
                <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">
                  B2B Portal
                </span>
                <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
                  Request <br />{" "}
                  <span className="italic text-slate-400 underline decoration-slate-700 underline-offset-8">
                    Procurement.
                  </span>
                </h2>
                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  Submit your bulk requirements. Our procurement experts will
                  review your specifications and issue a formal quotation within
                  one business day.
                </p>
              </div>

              <div className="pt-12 border-t border-white/10 mt-12 lg:mt-0">
                <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-white/40 mb-2">
                  Division
                </div>
                <div className="text-xs tracking-widest uppercase font-bold text-white">
                  Textile Co. Heritage <br />
                  <span className="text-primary italic">Production Hub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
