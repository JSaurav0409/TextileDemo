import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import Cotton from "../../assets/images/cotton.jpg";
import Silk from "../../assets/images/silk.jpg";
import Polyester from "../../assets/images/polyester.jpg";
import Linen from "../../assets/images/linen.jpg";
import Rayon from "../../assets/images/rayon.jpg";
import Denim from "../../assets/images/denim.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// Sample product data
const products = [
  { id: 1, name: "Cotton Fabric", image: Cotton },
  { id: 2, name: "Silk Fabric", image: Silk },
  { id: 3, name: "Polyester Fabric", image: Polyester },
  { id: 4, name: "Linen Fabric", image: Linen },
  { id: 5, name: "Rayon Fabric", image: Rayon },
  { id: 6, name: "Denim Fabric", image: Denim },
];

const Products = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: "ease-in-out", // Easing function
      once: true, // Animation will happen only once
      offset: 100, // Animation trigger offset
    });
  }, []);

  return (
    <div className="products p-10 bg-gray-100">
      <h1
        className="text-3xl font-bold text-center mb-20"
        data-aos="fade-up" // AOS fade-up animation for header
      >
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            data-aos="fade-up" // Add fade-up animation for each product card
            data-aos-duration="1500" // Duration for each product
            data-aos-delay={`${100 * product.id}`} // Stagger delay for each product
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
