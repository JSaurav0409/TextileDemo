import React from "react";

const PhilosophySection = ({ visionImg, missionImg }) => {
  return (
    <section className="bg-[#fafafa] py-32 px-6 lg:px-20 overflow-hidden relative">
      {/* Subtle Background Watermark */}
      <div className="absolute top-20 left-10 text-[12rem] font-serif text-slate-200/40 select-none pointer-events-none hidden lg:block">
        Evolve
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- VISION SECTION --- */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-48">
          <div className="w-full lg:w-6/12 relative" data-aos="zoom-out-right">
            {/* Decorative Background Element */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-slate-200/50 -z-10 rounded-full blur-3xl" />

            <div className="relative overflow-hidden rounded-sm shadow-2xl group">
              <img
                src={visionImg}
                alt="Vision"
                className="w-full h-[450px] md:h-[600px] object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>

          <div className="w-full lg:w-6/12 space-y-8" data-aos="fade-left">
            <div className="inline-block border-b border-slate-900 pb-2">
              <span className="text-xs font-bold tracking-[0.5em] uppercase text-slate-500">
                01 — The Vision
              </span>
            </div>

            <h3 className="text-5xl md:text-7xl font-serif text-slate-900 leading-[1.1]">
              Defining the <br />
              <span className="italic text-slate-400">Horizon.</span>
            </h3>

            <div className="max-w-md space-y-6">
              <p className="text-xl text-slate-600 font-light leading-relaxed italic border-l-2 border-slate-200 pl-6">
                "To create sustainable, innovative textiles that empower
                industries and inspire creativity worldwide."
              </p>
              <p className="text-slate-500 text-sm leading-loose">
                Our vision guides every thread we spin, ensuring that our
                technological advancements serve both the creator and the
                environment in equal measure.
              </p>
            </div>
          </div>
        </div>

        {/* --- MISSION SECTION --- */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="w-full lg:w-6/12 relative" data-aos="zoom-out-left">
            {/* Decorative Background Element */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-slate-200/50 -z-10 rounded-full blur-3xl" />

            <div className="relative overflow-hidden rounded-sm shadow-2xl group">
              <img
                src={missionImg}
                alt="Mission"
                className="w-full h-[450px] md:h-[600px] object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>

          <div className="w-full lg:w-6/12 space-y-8" data-aos="fade-right">
            <div className="inline-block border-b border-slate-900 pb-2">
              <span className="text-xs font-bold tracking-[0.5em] uppercase text-slate-500">
                02 — The Mission
              </span>
            </div>

            <h3 className="text-5xl md:text-7xl font-serif text-slate-900 leading-[1.1]">
              Crafting <br />
              <span className="italic text-slate-400">Connections.</span>
            </h3>

            <div className="max-w-md space-y-6">
              <p className="text-xl text-slate-600 font-light leading-relaxed italic border-l-2 border-slate-200 pl-6">
                "Providing high-quality textile solutions that enhance
                lifestyles and foster global connections through innovation."
              </p>
              <p className="text-slate-500 text-sm leading-loose">
                Every thread we weave is a testament to our commitment to
                excellence, bridging the gap between traditional craftsmanship
                and future-ready technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
