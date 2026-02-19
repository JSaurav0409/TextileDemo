import React from "react";

const PhilosophySection = ({ visionImg, missionImg }) => {
  return (
    <section className="bg-white py-32 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- VISION ROW --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32 md:mb-48">
          <div className="relative" data-aos="fade-right">
            {/* Background Decorative Element */}
            <div className="absolute -top-6 -left-6 w-full h-full border border-slate-100 -z-10 translate-x-4 translate-y-4" />
            <div className="overflow-hidden shadow-2xl">
              <img
                src={visionImg}
                alt="Vision"
                className="w-full h-[400px] md:h-[550px] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>

          <div className="space-y-6" data-aos="fade-left">
            <div className="flex items-center gap-4">
              <span className="w-12 h-px bg-primary" />
              <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase">
                The Future
              </span>
            </div>
            <h3 className="text-5xl md:text-7xl font-serif text-slate-900 leading-tight">
              Our <span className="italic text-slate-400">Vision.</span>
            </h3>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-md">
              To create sustainable, innovative textiles that empower industries
              and inspire creativity worldwide.
            </p>
          </div>
        </div>

        {/* --- MISSION ROW --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div
            className="order-2 lg:order-1 space-y-6 text-right flex flex-col items-end"
            data-aos="fade-right"
          >
            <div className="flex items-center gap-4">
              <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase">
                The Journey
              </span>
              <span className="w-12 h-px bg-primary" />
            </div>
            <h3 className="text-5xl md:text-7xl font-serif text-slate-900 leading-tight">
              Our <span className="italic text-slate-400">Mission.</span>
            </h3>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-md">
              Providing high-quality textile solutions that enhance lifestyles
              and foster global connections through innovation.
            </p>
          </div>

          <div className="order-1 lg:order-2 relative" data-aos="fade-left">
            {/* Background Decorative Element */}
            <div className="absolute -top-6 -right-6 w-full h-full border border-slate-100 -z-10 -translate-x-4 translate-y-4" />
            <div className="overflow-hidden shadow-2xl">
              <img
                src={missionImg}
                alt="Mission"
                className="w-full h-[400px] md:h-[550px] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
