import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Team from "./Team";
import CompanyHistory from "./CompanyHistory";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true, // Recommended for a smooth professional flow
    });
  }, []);

  return (
    <div className="bg-[#0e1012]">
      {/* --- REFINED INTRO SECTION --- */}
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 px-6 lg:px-20 overflow-hidden">
        {/* Large Background Text for Texture */}
        <div className="absolute top-20 right-[-5%] text-[15rem] font-serif italic text-white/[0.02] select-none pointer-events-none hidden lg:block">
          Excellence
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <span className="text-primary tracking-[0.4em] text-[10px] font-bold uppercase mb-6 block">
              Established 2000
            </span>
            <h1 className="text-6xl md:text-8xl font-serif italic text-white leading-[0.9]">
              The Story of <br /> 
              <span className="text-slate-400 not-italic font-sans font-light uppercase tracking-tighter text-5xl md:text-7xl">Our Craft</span>
            </h1>
            
            {/* Minimalist Divider */}
            <div className="mt-12 h-px w-24 bg-primary/50" />
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 lg:pt-16" data-aos="fade-up" data-aos-delay="200">
            <div className="space-y-8">
              <p className="text-2xl md:text-3xl font-serif italic text-slate-300 leading-relaxed">
                "We are more than just a textile company; we are curators of quality and pioneers of sustainable innovation."
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-500 text-sm font-light leading-loose">
                <p>
                  Over the last two decades, we have established ourselves
                  as a trusted name in the industry, known for innovation,
                  craftsmanship, and sustainability. Starting as a small workshop in
                  2000, we have grown into a global brand.
                </p>
                <p>
                  Our dedication to using eco-friendly materials and cutting-edge 
                  technology has set us apart, enabling us to deliver products 
                  that inspire creativity and meet the diverse demands of our 
                  clients worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INTEGRATED COMPONENTS --- */}
      <div className="relative z-10">
        <CompanyHistory />
        
        {/* Subtle spacing/transition between history and team */}
        <div className="py-20 bg-[#0e1012]" /> 
        
        <Team />
      </div>
    </div>
  );
};

export default About;