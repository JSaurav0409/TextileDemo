import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { products } from "../../data/product"; // Import the central data
import ProductCard from "./ProductCard";

const Products = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section id="product-list" className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-xl mb-16">
          <h2
            className="text-sm uppercase tracking-[0.4em] text-primary font-bold mb-4"
            data-aos="fade-right"
          >
            The Collection
          </h2>
          <h1
            className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Exceptional Fabrics for <br />
            <span className="italic text-slate-400">Modern Craft.</span>
          </h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group cursor-pointer"
            >
              {/* Product Card Container */}
              <div className="relative overflow-hidden aspect-[4/5] bg-gray-200 mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-slate-900">
                  {product.category}
                </span>
              </div>

              {/* Text Content */}
              <div className="flex justify-between items-end border-b border-slate-200 pb-4">
                <div>
                  <h3 className="text-xl font-serif text-slate-900 group-hover:text-primary transition-colors italic">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Sustainably Sourced
                  </p>
                </div>
                <button className="text-xs uppercase tracking-tighter font-bold text-slate-400 group-hover:text-slate-900 transition-colors">
                  Details +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
