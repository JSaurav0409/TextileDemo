import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { products } from "../../data/product";
import ProductCard from "./ProductCard";

const ProductList = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <section id="product-list" className="py-24 bg-[#FCFCFC]">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-slate-200 pb-10">
          <div className="max-w-2xl" data-aos="fade-up">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
              The Curated Collection
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-slate-900 leading-tight">
              Mastery in every <br />
              <span className="italic text-slate-400">interwoven thread.</span>
            </h2>
          </div>

          <div
            className="mt-8 md:mt-0 md:text-right"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="text-slate-500 max-w-xs text-sm leading-relaxed mb-6">
              Sourced globally to provide designers with fabrics that define
              durability.
            </p>
            <button className="text-xs uppercase tracking-widest font-bold border-b-2 border-primary pb-1 hover:opacity-70 transition-all">
              Filter by Material
            </button>
          </div>
        </header>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {products.map((product, index) => (
            <ProductItem key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Sub-component for better readability
const ProductItem = ({ product, index }) => (
  <article
    className="group cursor-pointer"
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-slate-100 transition-all duration-500 group-hover:shadow-2xl">
      <ProductCard product={product} />

      {/* Category Badge */}
      <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md text-slate-900 text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 shadow-sm">
        {product.category}
      </span>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500" />
    </div>

    {/* Info Row */}
    <div className="flex justify-between items-center px-1">
      <div>
        <h3 className="text-lg font-serif text-slate-800 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="w-4 h-[1px] bg-slate-300 group-hover:w-8 group-hover:bg-primary transition-all duration-500" />
          <p className="text-[10px] uppercase tracking-widest text-slate-400">
            View Specs
          </p>
        </div>
      </div>

      <button className="opacity-0 group-hover:opacity-100 text-[10px] font-black underline underline-offset-4 tracking-tighter transition-opacity duration-300">
        ENQUIRE
      </button>
    </div>
  </article>
);

export default ProductList;
