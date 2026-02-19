import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate
import AOS from "aos";
import "aos/dist/aos.css";

// Data Import
import { historyEvents } from "../../data/historyData";

// Static Asset Imports
import HistoryImage from "../../assets/images/TextileHistory.jpg";
import VisionImage from "../../assets/images/vision.jpg";
import MissionImage from "../../assets/images/mission.jpg";
import PhilosophySection from "./PhilosophySection";

const CompanyHistory = () => {
  const [activeStage, setActiveStage] = useState(0);
  const navigate = useNavigate(); // 2. Initialize navigate function

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#0e1012] text-white overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6">
        <div className="absolute inset-0 z-0">
          <img
            src={HistoryImage}
            alt="History Background"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0e1012]/50 to-[#0e1012]" />
        </div>

        <div className="relative z-10 text-center" data-aos="fade-up">
          <span className="text-primary tracking-[0.5em] text-[10px] font-bold uppercase mb-4 block">
            Our Legacy
          </span>
          <h1 className="text-6xl md:text-[120px] font-serif italic leading-none mb-8">
            Heritage
          </h1>
          <p className="text-slate-400 font-light tracking-[0.2em] uppercase text-xs">
            Crafting the Future since 2000
          </p>
        </div>
      </section>

      {/* --- TIMELINE SECTION --- */}
      <section className="py-32 px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/3" data-aos="fade-right">
            <h2 className="text-primary font-bold text-[10px] tracking-widest uppercase mb-12">
              Historical Record
            </h2>
            <div className="space-y-10">
              {historyEvents.map((event, index) => (
                <button
                  key={event.year}
                  onMouseEnter={() => setActiveStage(index)}
                  className={`block text-left group transition-all duration-500 ${
                    activeStage === index ? "opacity-100" : "opacity-20"
                  }`}
                >
                  <span className="block text-5xl font-serif italic mb-2">
                    {event.year}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    {event.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Stage View */}
          <div className="lg:w-2/3 relative min-h-[500px]" data-aos="fade-left">
            <div className="relative group">
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-primary/50" />
              <img
                key={activeStage}
                src={historyEvents[activeStage].image}
                alt={historyEvents[activeStage].title}
                className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 animate-in fade-in slide-in-from-right-10"
              />
            </div>
            <div className="mt-10 max-w-xl">
              <span className="text-primary text-[9px] font-black tracking-widest uppercase mb-4 block">
                {historyEvents[activeStage].tag}
              </span>
              <p className="text-2xl font-serif leading-relaxed italic text-slate-300">
                "{historyEvents[activeStage].desc}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <PhilosophySection visionImg={VisionImage} missionImg={MissionImage} />

      {/* --- CALL TO ACTION --- */}
      <section className="py-32 border-t border-white/5 text-center">
        <h2 className="text-4xl font-serif italic mb-10">
          Ready to see our collections?
        </h2>
        {/* 3. Add onClick handler to redirect to /products */}
        <button
          onClick={() => navigate("/products")}
          className="px-12 py-4 border border-white/20 hover:border-primary hover:bg-primary transition-all duration-500 text-[10px] font-black uppercase tracking-[0.3em]"
        >
          Explore Products
        </button>
      </section>
    </div>
  );
};

export default CompanyHistory;
