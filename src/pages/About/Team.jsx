import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import johnImage from "../../assets/images/John.jpg";
import janeImage from "../../assets/images/jane.jpg";
import aliceimage from "../../assets/images/Alice.jpg";

const teamMembers = [
  {
    name: "John Doe",
    role: "Chief Executive",
    image: johnImage,
    bio: "With over two decades in global textile leadership, John anchors our commitment to sustainable innovation.",
  },
  {
    name: "Jane Checking",
    role: "Creative Director",
    image: janeImage,
    bio: "Jane redefines fabric architecture, blending heritage weaving techniques with contemporary aesthetic vision.",
  },
  {
    name: "Alice Brown",
    role: "Global Strategy",
    image: aliceimage,
    bio: "Alice orchestrates our international presence, ensuring our artisanal craft reaches every corner of the globe.",
  },
];

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#fcfcfc] py-32 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-slate-200 pb-12">
          <div data-aos="fade-right">
            <span className="text-primary tracking-[0.4em] text-[10px] font-bold uppercase mb-4 block">
              Our People
            </span>
            <h2 className="text-5xl md:text-7xl font-serif italic text-slate-900 leading-none">
              The Minds <br /> Behind the{" "}
              <span className="text-slate-400">Loom.</span>
            </h2>
          </div>
          <div className="mt-8 md:mt-0 max-w-xs" data-aos="fade-left">
            <p className="text-slate-600 text-sm font-light leading-relaxed">
              Strength in diversity. Passion in craft. Our leadership team
              combines decades of textile mastery with modern design thinking.
            </p>
          </div>
        </div>

        {/* --- TEAM GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Image Container: Clean Portrait Style */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 shadow-sm transition-shadow duration-500 group-hover:shadow-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                />

                {/* Decorative Corner Element */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-slate-200 m-4 group-hover:border-primary transition-colors" />
              </div>

              {/* Content Section */}
              <div className="mt-10 space-y-3">
                <span className="text-primary text-[9px] font-black tracking-[0.3em] uppercase">
                  {member.role}
                </span>
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl font-serif text-slate-900 italic">
                    {member.name}
                  </h3>
                  <div className="h-[1px] flex-grow bg-slate-200" />
                </div>
                <p className="text-slate-500 text-sm font-light leading-relaxed pr-6 italic">
                  "{member.bio}"
                </p>

                <div className="pt-4 overflow-hidden">
                  <a
                    href="#"
                    className="inline-block text-[10px] text-slate-900 font-bold uppercase tracking-[0.3em] relative group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Discover More &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- LIGHT BACKGROUND DECORATION --- */}
        <div className="mt-40 text-center opacity-[0.04] select-none pointer-events-none hidden lg:block">
          <span className="text-[12rem] font-serif italic text-slate-900 whitespace-nowrap">
            Global &bull; Artistry &bull; Quality
          </span>
        </div>
      </div>
    </section>
  );
};

export default Team;
