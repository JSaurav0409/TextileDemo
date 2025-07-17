import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HistoryImage from "../../assets/images/TextileHistory.jpg";
import VisionImage from "../../assets/images/vision.jpg";
import MissionImage from "../../assets/images/mission.jpg";
import EventImage1 from "../../assets/images/event1.jpg";
import EventImage2 from "../../assets/images/event2.jpg";
import EventImage3 from "../../assets/images/event3.jpg"; // Add your event image
import EventImage4 from "../../assets/images/event4.jpg"; // Add your event image

const CompanyHistory = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);

  const handleEventClick = (eventIndex) => {
    setSelectedEvent(selectedEvent === eventIndex ? null : eventIndex);
  };

  const events = [
    {
      year: 2000,
      title: "Foundation",
      image: EventImage1,
      description: "Our company was founded in 2000...",
      details: ["Founded with 5 members", "Focused on high-quality fabrics"],
    },
    {
      year: 2005,
      title: "Eco-Friendly Fabrics",
      image: EventImage2,
      description: "In 2005, we pioneered eco-friendly fabrics...",
      details: [
        "Launched eco-friendly product line",
        "Set sustainability benchmarks",
      ],
    },
    {
      year: 2010,
      title: "Reached First 100 Crore",
      image: EventImage3,
      description: "In 2010, we reached the milestone...",
      details: [
        "Achieved 100 Crore in revenue",
        "Established ourselves as a trusted brand",
      ],
    },
    {
      year: 2015,
      title: "Expanding to More Countries",
      image: EventImage4,
      description: "In 2015, we expanded our operations...",
      details: [
        "Entered Europe and the Middle East",
        "Increased global partnerships",
      ],
    },
  ];

  return (
    <section
      className="company-history p-6 sm:p-8 lg:p-10 bg-gray-100"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2
        className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12 sm:mb-20"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        Our History
      </h2>

      {/* Timeline Section */}
      <div
        className="timeline mt-8"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-6 text-center">
          Key Events
        </h3>

        {/* Vertical Timeline */}
        <div className="timeline-container relative pl-8 sm:pl-12 md:pl-16">
          <div className="timeline-line absolute top-0 left-4 sm:left-6 md:left-8 w-1 bg-blue-500 h-full"></div>
          {events.map((event, index) => (
            <div
              key={event.year}
              className={`timeline-item cursor-pointer mb-8 sm:mb-10 ${
                selectedEvent === index ? "selected" : ""
              }`}
              onClick={() => handleEventClick(index)}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`timeline-dot w-10 sm:w-12 h-10 sm:h-12 bg-blue-500 text-white rounded-full flex justify-center items-center font-semibold sm:text-lg transition-all duration-300 ease-in-out transform hover:scale-110 ${
                    selectedEvent === index
                      ? "bg-green-500 shadow-lg"
                      : "hover:bg-blue-700"
                  }`}
                  style={{
                    border: "2px solid #fff", // Adding white border like a shirt button
                  }}
                >
                  {event.year}
                </div>
                <p className="font-bold sm:text-lg text-center ml-4 sm:ml-6">
                  {event.title}
                </p>
              </div>

              {/* Event Details */}
              {selectedEvent === index && (
                <div className="timeline-details mt-4">
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                      <img
                        src={event.image}
                        alt={`Event ${event.year}`}
                        className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-md"
                      />
                    </div>
                    <div className="w-full sm:w-1/2 pl-0 sm:pl-6 mt-6 sm:mt-0">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                        {event.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-700 mb-4">
                        {event.description}
                      </p>
                      <ul className="list-disc pl-6 text-sm sm:text-base text-gray-600">
                        {event.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Vision Section */}
      <hr className="border-t-2 border-gray-300 my-8 sm:my-12 w-1/2 mx-auto" />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 items-center">
        <div className="text" data-aos="fade-right" data-aos-duration="1000">
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">
            Our Vision
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Our vision is to create sustainable, innovative, and versatile
            textiles that empower industries and inspire creativity. We are
            committed to excellence and environmental stewardship.
          </p>
        </div>

        <div className="image" data-aos="fade-left" data-aos-duration="1000">
          <img
            src={VisionImage}
            alt="Company Vision"
            className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Mission Section */}
      <hr className="border-t-2 border-gray-300 my-8 sm:my-12 w-1/2 mx-auto" />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 items-center">
        <div className="image" data-aos="fade-right" data-aos-duration="1000">
          <img
            src={MissionImage}
            alt="Company Mission"
            className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="text" data-aos="fade-left" data-aos-duration="1000">
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">
            Our Mission
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Our mission is to provide high-quality, sustainable, and innovative
            textile solutions that enhance lifestyles, empower industries, and
            foster global connections.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
