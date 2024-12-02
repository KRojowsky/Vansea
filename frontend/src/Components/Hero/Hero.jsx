import React, { useState, useEffect } from "react";
import "./Hero.scss";
import placeholder from "../../assets/placeholder.jpg";

const heroImages = [
  { src: placeholder , alt: "Image 1" },
  { src: placeholder , alt: "Image 2" },
  { src: placeholder , alt: "Image 3" },
  { src: placeholder , alt: "Image 4" },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div className="hero-image-container">
        <img
          src={heroImages[currentIndex].src}
          alt={heroImages[currentIndex].alt}
          className="hero-image"
        />
      </div>

      <div className="hero-dots">
        {heroImages.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
