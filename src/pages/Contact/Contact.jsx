import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Animation happens once
    });
  }, []);

  const handleFormSubmit = (message, type) => {
    setStatusMessage(message);
    setStatusType(type);
  };

  const handleLoadingState = (isLoading) => {
    setLoading(isLoading);
  };

  return (
    <div className="contact p-10 bg-gradient-to-r from-blue-50 to-green-50 min-h-screen">
      {/* Contact Section Header */}
      <div className="text-center m-12" data-aos="fade-up">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
        <p className="text-lg text-gray-600">
          We’d love to hear from you! Reach out to us with your questions or
          feedback. ❤️
        </p>
      </div>

      {/* Status Message */}
      {statusMessage && (
        <div
          className={`text-center text-lg font-semibold mt-4 ${
            statusType === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {statusMessage}
        </div>
      )}

      {/* Contact Form Section with Overlay Spinner */}
      <div
        className="relative max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {/* Loading Spinner Overlay */}
        {loading && (
          <div className="absolute inset-0 bg-opacity-50 flex justify-center items-center z-10">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-32 h-32 border-t-4 border-blue-500 rounded-full animate-spin"></div>
              <span className="absolute text-blue-500 font-semibold text-xl">
                Loading...
              </span>
            </div>
          </div>
        )}

        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Get in Touch ✌️
        </h2>
        <ContactForm
          onSubmit={handleFormSubmit}
          onLoading={handleLoadingState}
        />
      </div>

      {/* Contact Information */}
      <div className="text-center mt-20" data-aos="fade-up">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Office</h3>
        <p className="text-lg text-gray-600">
          123 Textile Road, Fabric City, 12345
        </p>
        <p className="text-lg text-gray-600">
          Email: contact@textilecompany.com
        </p>
        <p className="text-lg text-gray-600">Phone: +123 456 7890</p>
      </div>
    </div>
  );
};

export default Contact;
