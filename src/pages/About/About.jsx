import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Team from "./Team";
import CompanyHistory from "./CompanyHistory";

const About = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: false, // Animation happens on both down and up scroll
      mirror: true, // Ensures that the animation triggers again when scrolling back up
    });
  }, []);

  return (
    <div className="about-page">
      <section
        className="intro p-20 mt-4 bg-gray-50"
        data-aos="fade-up" // AOS animation type
      >
        <h1 className="text-4xl font-bold text-center text-primary">
          About Our Company
        </h1>
        <p className="mt-4 text-justify pt-5 text-xl text-gray-700">
          We are a leading textile company offering high-quality fabrics for
          every need. Over the last two decades, we have established ourselves
          as a trusted name in the industry, known for innovation,
          craftsmanship, and sustainability. Starting as a small workshop in
          2000, we have grown into a global brand with a commitment to
          excellence and customer satisfaction. Our dedication to using
          eco-friendly materials and cutting-edge technology has set us apart,
          enabling us to deliver products that inspire creativity and meet the
          diverse demands of our clients worldwide. At the heart of our success
          is our unwavering focus on quality, passion for innovation, and drive
          to make a lasting impact in the world of textiles.
        </p>
      </section>
      <CompanyHistory />
      <Team />
    </div>
  );
};

export default About;
