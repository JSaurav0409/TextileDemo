import React from "react";
import HeroSection from "./HeroSection";
import CompanyHistory from "../About/CompanyHistory";
import Products from "../Product/Product";

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* We pass the limit of 3 here */}
      <Products limit={3} />
      <CompanyHistory />
    </div>
  );
};

export default Home;
