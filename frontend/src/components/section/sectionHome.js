import React, { useState } from "react";
import "./sectionHome.css";
import nexticon from "../../images/next.svg"; // Assuming this is your next icon path
import previcon from "../../images/previous.svg"; // Assuming this is your previous icon path
import staffingimg from "../../images/Staffing.png";
import technologyimg from "../../images/technologies.jpg";
import hospitalityimg from "../../images/download.jpg";

function SectionHome() {
  const images = [
    {
      src: require("../../images/1.jpg"),
      alt: "Service 1",
      caption: "Service 1 Description",
    },
    {
      src: require("../../images/2.jpg"),
      alt: "Service 2",
      caption: "Service 2 Description",
    },
    {
      src: require("../../images/3.jpg"),
      alt: "Service 3",
      caption: "Service 3 Description",
    },
    {
      src: require("../../images/4.jpg"),
      alt: "Success 1",
      caption: "Success Story 1",
    },
    {
      src: require("../../images/5.jpg"),
      alt: "Success 2",
      caption: "Success Story 2",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setLoading(true);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setLoading(true);
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="SectionHome">
      {/* Our Services and Success Section */}
      <div className="our-services">
        <h2>Precision and Trust in Action</h2>
        <div className="carousel">
          {currentIndex > 0 && (
            <button className="carousel-button prev" onClick={handlePrev}>
              <img src={previcon} alt="Previous" />
            </button>
          )}
          <div className="carousel-image">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className={loading ? "loading-image" : ""}
              loading="lazy"
              onLoad={handleImageLoad}
            />
            <p className="caption">{images[currentIndex].caption}</p>
            {/* Dots indicator */}
            <div className="dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentIndex === index ? "active" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>
          </div>
          {currentIndex < images.length - 1 && (
            <button className="carousel-button next" onClick={handleNext}>
              <img src={nexticon} alt="Next" />
            </button>
          )}
        </div>
      </div>
      <div className="services">
        <h2>Our Services</h2>
        <div className="service-boxes">
          <div className="service-item">
            <h3 className="service-item-text">Staffing</h3>
            <div className="service-item-img">
              <img src={staffingimg} alt="Staffing" />
            </div>
            <div className="servic-item-desc">
              Connecting businesses with top talent for seamless workforce
              integration.
            </div>
            <div className="service-item-button">View More</div>
          </div>
          <div className="service-item">
            <h3 className="service-item-text">Hospitality</h3>
            <div className="service-item-img">
              <img src={hospitalityimg} alt="hospitality" />
            </div>
            <div className="servic-item-desc">
              Elevating guest experiences with tailored, high-quality service
              solutions.
            </div>
            <div className="service-item-button">View More</div>
          </div>
          <div className="service-item">
            <h3 className="service-item-text">Tech Solutions</h3>
            <div className="service-item-img">
              <img src={technologyimg} alt="technologies" />
            </div>
            <div className="servic-item-desc">
              Innovative tech solutions driving efficiency, security, and
              growth.
            </div>
            <div className="service-item-button">View More</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHome;
