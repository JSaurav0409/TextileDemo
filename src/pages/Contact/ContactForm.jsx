import React, { useState } from "react";

const ContactForm = ({ onSubmit, onLoading }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    onLoading(true);

    const formDataToSubmit = {
      ...formData,
      access_key: "2d25fac2-634b-4f92-af7e-1340431c6c7d",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataToSubmit),
      }).then((res) => res.json());

      if (res.success) {
        onSubmit("Your message has been received.", "success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        onSubmit("Something went wrong. Please try again.", "error");
      }
    } catch (error) {
      onSubmit("Connection error.", "error");
    } finally {
      onLoading(false);
    }
  };

  // Shared Tailwind styles for inputs
  const inputStyles =
    "w-full bg-transparent border-b border-slate-300 py-3 outline-none focus:border-primary transition-all duration-300 placeholder:text-slate-300 text-slate-800 font-light";

  return (
    <form onSubmit={onSubmitForm} className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="group">
          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputStyles}
            placeholder="Full Name"
            required
          />
        </div>
        <div className="group">
          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputStyles}
            placeholder="email@address.com"
            required
          />
        </div>
      </div>

      <div className="group">
        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
          Phone Number (Optional)
        </label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={inputStyles}
          placeholder="+1 (000) 000-0000"
        />
      </div>

      <div className="group">
        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
          Your Inquiry
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`${inputStyles} resize-none`}
          rows="4"
          placeholder="Tell us about your project..."
          required
        />
      </div>

      <button
        type="submit"
        className="group relative overflow-hidden bg-slate-900 text-white px-12 py-4 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-primary transition-all duration-500 shadow-xl"
      >
        <span className="relative z-10">Send Message</span>
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      </button>
    </form>
  );
};

export default ContactForm;
