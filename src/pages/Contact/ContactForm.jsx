import React, { useState } from "react";

const ContactForm = ({ onSubmit, onLoading }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    botcheck: "", // New honeypot state
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    onLoading(true);

    // If the hidden honeypot is filled, stop submission locally
    if (formData.botcheck) {
      onLoading(false);
      return;
    }

    const submissionData = {
      access_key: "2d25fac2-634b-4f92-af7e-1340431c6c7d",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      from_name: "Textile Heritage Portal",
      subject: `New Inquiry from ${formData.name}`,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        onSubmit("Your message has been received.", "success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          botcheck: "",
        });
      } else {
        // Specifically catch the spam message from the server
        const errorMsg = result.message?.includes("spam")
          ? "Submission flagged as spam. Please try again with different content."
          : result.message;
        onSubmit(errorMsg || "Submission failed.", "error");
      }
    } catch (error) {
      onSubmit("Network error. Please check your connection.", "error");
    } finally {
      onLoading(false);
    }
  };

  const inputStyles =
    "w-full bg-transparent border-b border-slate-300 py-3 outline-none focus:border-slate-900 transition-all duration-300 placeholder:text-slate-200 text-slate-800 font-light";

  return (
    <form onSubmit={onSubmitForm} className="space-y-10">
      {/* Honeypot Field - Hidden from users */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        onChange={handleChange}
        checked={formData.botcheck}
      />

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
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={inputStyles}
          placeholder="+91 00000 00000"
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
        className="group relative overflow-hidden bg-slate-900 text-white px-12 py-5 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-slate-800 transition-all duration-500 shadow-xl"
      >
        <span className="relative z-10">Send Message</span>
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      </button>
    </form>
  );
};

export default ContactForm;
