import React, { useState } from "react";

const ContactForm = ({ onSubmit, onLoading }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // Added phone field
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^[0-9]{10}$/; // Simple validation for 10-digit phone number
    return regex.test(phone);
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();

    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
      onSubmit("All fields are required.", "error");
      return;
    }

    if (!validateEmail(formData.email)) {
      onSubmit("Please enter a valid email address.", "error");
      return;
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      onSubmit("Please enter a valid phone number.", "error");
      return;
    }

    onLoading(true); // Start loading
    onSubmit("", ""); // Reset status messages

    const formDataToSubmit = {
      ...formData,
      access_key: "2d25fac2-634b-4f92-af7e-1340431c6c7d", 
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formDataToSubmit),
      }).then((res) => res.json());

      if (res.success) {
        onSubmit("Your message has been sent successfully!", "success");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Clear fields
      } else {
        onSubmit("There was an error submitting your message.", "error");
      }
    } catch (error) {
      onSubmit("Something went wrong, please try again.", "error");
    } finally {
      onLoading(false); // Stop loading
    }
  };

  return (
    <form onSubmit={onSubmitForm} className="space-y-6">
      {/* Name Field */}
      <div className="flex flex-col">
        <label htmlFor="name" className="text-lg font-semibold text-gray-800">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border-2 border-gray-300 p-3 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
          required
        />
      </div>

      {/* Email Field */}
      <div className="flex flex-col">
        <label htmlFor="email" className="text-lg font-semibold text-gray-800">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border-2 border-gray-300 p-3 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          required
        />
      </div>

      {/* Phone Field */}
      <div className="flex flex-col">
        <label htmlFor="phone" className="text-lg font-semibold text-gray-800">
          Phone:
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="border-2 border-gray-300 p-3 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your phone number"
        />
      </div>

      {/* Message Field */}
      <div className="flex flex-col">
        <label
          htmlFor="message"
          className="text-lg font-semibold text-gray-800"
        >
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="border-2 border-gray-300 p-3 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your message"
          rows="5"
          required
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
