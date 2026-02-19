import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate
import AOS from "aos";
import "aos/dist/aos.css";
import HeroImage from "../../assets/images/hero-textile.jpg";
import Button from "../../components/Button/Button";

const HeroSection = () => {
  const navigate = useNavigate(); // 2. Initialize the hook

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-quart",
      once: true,
    });
  }, []);

  const handleScroll = () => {
    const productSection = document.getElementById("product-list");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-[#fdfdfd] overflow-hidden flex items-center">
      {/* Background Visual */}
      <div
        className="absolute right-0 top-0 h-full w-full md:w-3/5 lg:w-1/2 z-0"
        data-aos="fade-left"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdfdfd] via-transparent to-transparent z-10" />
        <img
          src={HeroImage}
          alt="Textile Detail"
          className="h-full w-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
        />
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-8 md:px-16 z-20">
        <div className="max-w-3xl">
          <div
            className="flex items-center gap-3 mb-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <span className="h-[1px] w-12 bg-primary"></span>
            <span className="text-sm tracking-[0.4em] uppercase font-medium text-gray-500">
              Est. 1994 • Premium Weave
            </span>
          </div>

          <h1
            className="text-6xl md:text-8xl font-serif text-slate-900 leading-[1.1] mb-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Tactile <br />
            <span className="text-primary italic">Perfection.</span>
          </h1>

          <div
            className="relative p-8 md:p-10 bg-white/60 backdrop-blur-md border border-white/40 shadow-xl rounded-2xl max-w-lg"
            data-aos="zoom-in-up"
            data-aos-delay="600"
          >
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Discover a collection where heritage meets modern durability. Our
              fabrics are woven with precision for designers who refuse to
              compromise on quality.
            </p>

            {/* Updated Flex Container: Column on mobile, Row on tablet+ */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8">
              <Button
                onClick={handleScroll}
                className="w-full sm:w-auto !bg-slate-900 !text-white px-10 py-4 hover:!bg-primary transition-colors shadow-lg"
              >
                View Catalog
              </Button>

              <button
                onClick={() => navigate("/contact")}
                className="w-full sm:w-auto text-slate-900 font-semibold border-b-2 border-slate-900 pb-1 hover:text-primary hover:border-primary transition-all active:scale-95 text-center sm:text-left"
              >
                Request Samples
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic Elements */}
      <div className="absolute bottom-12 left-8 md:left-16 hidden md:block">
        <div className="flex flex-col gap-4 text-xs font-bold tracking-widest text-gray-400 uppercase vertical-text">
          <span>Sustainability</span>
          <span>•</span>
          <span>Craftsmanship</span>
          <span>•</span>
          <span>Innovation</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
