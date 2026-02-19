// src/pages/Home/Home.jsx
import React from "react";
import HeroSection from "./HeroSection"; // Correct the path here if necessary
import CompanyHistory from "../About/CompanyHistory";
import Products from "../Product/Product";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Products />
      <CompanyHistory />
    </div>
  );
};

export default Home;
