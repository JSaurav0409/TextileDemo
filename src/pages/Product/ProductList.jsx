import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductCard from "./ProductCard";
import Cotton from "../../assets/images/cotton.jpg";
import Silk from "../../assets/images/silk.jpg";
import Polyester from "../../assets/images/polyester.jpg";
import Linen from "../../assets/images/linen.jpg";
import Rayon from "../../assets/images/rayon.jpg";
import Denim from "../../assets/images/denim.jpg";

const ProductList = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: true, // Animation should happen only once
      offset: 100, // Trigger animation earlier
    });
  }, []);

  const products = [
    {
      id: 1,
      name: "Cotton Fabric",
      image: Cotton,
    },
    {
      id: 2,
      name: "Silk Fabric",
      image: Silk,
    },
    {
      id: 3,
      name: "Polyester Fabric",
      image: Polyester,
    },
    {
      id: 4,
      name: "Linen Fabric",
      image: Linen,
    },
    {
      id: 5,
      name: "Rayon Fabric",
      image: Rayon,
    },
    {
      id: 6,
      name: "Denim Fabric",
      image: Denim,
    },
    // Add more products here
  ];

  return (
    <section id="product-list" className="product-list p-10 bg-gray-50">
      <h2
        className="text-4xl font-bold mb-6 text-center"
        data-aos="fade-up" // Animation for the header
      >
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            data-aos="zoom-in" // Animation for each product card
            data-aos-duration="1000" // Duration of the animation for product cards
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
