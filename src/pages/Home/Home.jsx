// src/pages/Home/Home.jsx
import React from "react";
import HeroSection from "./HeroSection"; // Correct the path here if necessary
import ProductList from "../Product/ProductList";
import CompanyHistory from "../About/CompanyHistory";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProductList />
      <CompanyHistory />
    </div>
  );
};

export default Home;
