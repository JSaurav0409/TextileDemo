import React from "react";

const TermsOfService = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>
      <p className="text-base mb-4">
        Welcome to Textile Company. By accessing or using our website, you agree
        to be bound by these Terms of Service. If you do not agree, please do
        not use our site.
      </p>

      <h2 className="text-xl font-semibold mb-2">Use of Our Website</h2>
      <p className="mb-4">
        You may use our website for lawful purposes only. You agree not to
        engage in any activity that could harm our website, services, or users.
      </p>

      <h2 className="text-xl font-semibold mb-2">Order and Payment</h2>
      <p className="mb-4">
        All orders are subject to availability. Payment must be made in full at
        the time of purchase. We reserve the right to cancel any order at our
        discretion.
      </p>

      <h2 className="text-xl font-semibold mb-2">Limitation of Liability</h2>
      <p className="mb-4">
        Textile Company is not liable for any direct, indirect, or incidental
        damages arising from the use of our website or services.
      </p>

      <p className="text-sm text-gray-600">Last updated: January 9, 2025</p>
    </div>
  );
};

export default TermsOfService;
