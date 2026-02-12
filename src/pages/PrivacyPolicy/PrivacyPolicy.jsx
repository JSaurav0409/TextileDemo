import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-base mb-4">
        At Textile Company, we respect your privacy and are committed to
        protecting your personal information. This Privacy Policy outlines the
        types of data we collect, how we use it, and how we keep it secure.
      </p>

      <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          Personal information (e.g., name, email address, contact details)
        </li>
        <li>Order details and preferences</li>
        <li>Website usage data via cookies</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">
        How We Use Your Information
      </h2>
      <p className="mb-4">
        We use your information to process orders, improve our services, and
        provide a personalized shopping experience. We do not share your data
        with third parties without your consent, except as required by law.
      </p>

      <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
      <p className="mb-4">
        You have the right to access, correct, or delete your personal data. To
        exercise these rights, please contact us at support@textilecompany.com.
      </p>

      <p className="text-sm text-gray-600">Last updated: January 9, 2025</p>
    </div>
  );
};

export default PrivacyPolicy;
