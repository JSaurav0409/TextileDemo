import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroImage from "../../assets/images/hero-textile.jpg"; // Import the local image
import Button from "../../components/Button/Button"; // Import Button component

const HeroSection = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: false, // Animation happens only once while scrolling down
    });
  }, []);

  const handleScroll = () => {
    const productSection = document.getElementById("product-list");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="hero bg-cover bg-center h-screen text-white p-10 flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${HeroImage})`, // Use the imported image here
      }}
      data-aos="fade-up" // AOS animation for the hero section
    >
      <div className="bg-black bg-opacity-40 p-6 rounded-lg" data-aos="fade-in">
        <h1
          className="text-5xl font-bold mb-4 text-primary"
          data-aos="fade-up" // AOS fade-up animation for the title
        >
          Welcome to Our Textile Company
        </h1>
        <p
          className="text-lg mb-6 text-center"
          data-aos="fade-up" // AOS fade-up animation for the description
        >
          Explore high-quality fabrics, designed for every occasion.
        </p>
        <div className="flex justify-center">
          <Button onClick={handleScroll} data-aos="zoom-in">
            Explore Products {/* Pass the text as children */}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
