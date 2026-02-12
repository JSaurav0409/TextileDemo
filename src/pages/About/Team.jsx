import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import johnImage from "../../assets/images/John.jpg"; // Replace with actual image paths
import janeImage from "../../assets/images/jane.jpg"; // Replace with actual image paths
import aliceimage from "../../assets/images/Alice.jpg";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    image: johnImage,
    bio: "John has over 20 years of experience in the textile industry and leads the company with a focus on sustainability.",
  },
  {
    name: "Jane Checking",
    role: "Lead Designer",
    image: janeImage,
    bio: "Jane is passionate about creating innovative fabric designs and has been with the company since 2015.",
  },
  {
    name: "Alice Brown",
    role: "Marketing Manager",
    image: aliceimage, // Replace with actual image
    bio: "Alice drives the marketing strategies, ensuring our brand reaches a global audience.",
  },
];

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: false, // Allow animations to trigger on both downward and upward scrolling
      offset: 100, // Trigger animation earlier
    });
  }, []);

  return (
    <section className="team p-10 bg-gray-100">
      <h2
        className="text-4xl font-bold text-center text-primary mb-6"
        data-aos="fade-up" // AOS fade-up animation for the section header
      >
        Meet Our Team
      </h2>
      <p
        className="mb-8 text-center text-lg text-gray-700"
        data-aos="fade-up" // AOS fade-up animation for the paragraph
      >
        We have a dedicated team working hard to deliver quality products.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="team-member bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            data-aos="zoom-in" // AOS zoom-in animation for each team member
            data-aos-duration="1000" // Duration of the animation for team members
          >
            <div className="relative mx-auto w-60 h-60 mb-6 overflow-hidden rounded-full">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-full border-4 border-primary shadow-md hover:scale-105 transform transition-transform duration-300"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
            <p className="text-lg text-gray-600">{member.role}</p>
            <p className="mt-4 text-sm text-gray-500">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
