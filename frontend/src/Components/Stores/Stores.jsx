import React, { useRef, useState, useEffect } from "react";
import "./Stores.scss";
import placeholder from "../../assets/placeholder.jpg";
import placeholder2 from "../../assets/placeholder2.jpg"; // Make sure to import placeholder2 if not already imported

const Stores = () => {
  const storesContainerRef = useRef(null);
  const [activeImage, setActiveImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [timer, setTimer] = useState(5);

  // Timer functionality to hide the image after 5 seconds
  useEffect(() => {
    if (activeImage && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval); // Cleanup interval on component unmount or when timer ends
    }
    return;
  }, [activeImage, timer]);

  // Hide the image after the timer reaches 0
  useEffect(() => {
    if (timer === 0) {
      setActiveImage(null); // Hide the image after 5 seconds
    }
  }, [timer]);

  const scrollLeft = () => {
    if (storesContainerRef.current) {
      storesContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (storesContainerRef.current) {
      storesContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  // Function to display the image in the fullscreen view
  const showImage = (image, index) => {
    setActiveImage(image);
    setActiveIndex(index); // Remember the active image index
    setTimer(5); // Reset the timer to 5 seconds
  };

  // Handle arrow clicks to change the image
  const handleArrowClick = (direction) => {
    let newIndex = activeIndex + direction;
    if (newIndex < 0) newIndex = storiesData.length - 1; // If at the first element, go to the last
    if (newIndex >= storiesData.length) newIndex = 0; // If at the last element, go to the first
    setActiveIndex(newIndex); // Update active index
    setActiveImage(storiesData[newIndex].image); // Change image
    setTimer(5); // Reset the timer to 5 seconds
  };

  const storiesData = [
    { image: placeholder, link: "#" },
    { image: placeholder2, link: "#" },
    { image: placeholder, link: "#" },
    { image: placeholder2, link: "#" },
    { image: placeholder, link: "#" },
    { image: placeholder2, link: "#" },
    { image: placeholder2, link: "#" },
    { image: placeholder, link: "#" },
    { image: placeholder2, link: "#" },
    { image: placeholder, link: "#" },
    { image: placeholder2, link: "#" },
    { image: placeholder2, link: "#" },
    { image: placeholder2, link: "#" },
    { image: placeholder, link: "#" },
  ];

  return (
    <div className="stores">
      <button className="arrow-left" onClick={scrollLeft}>
        &#11207;
      </button>

      <div className="stores-container" ref={storesContainerRef}>
        {storiesData.map((store, index) => (
          <div className="store" key={index}>
            <a
              href={store.link}
              onClick={(e) => {
                e.preventDefault();
                showImage(store.image || placeholder, index);
              }}
            >
              <img src={store.image || placeholder} alt={`Store ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>

      <button className="arrow-right" onClick={scrollRight}>
        &#11208;
      </button>

      {/* Fullscreen view of the active image */}
      {activeImage && (
        <div className="image-overlay">
          <div className="image-wrapper">
            <button
              className="arrow-left-fullscreen"
              onClick={() => handleArrowClick(-1)} // Navigate to the previous image
            >
              &#11207;
            </button>
            <img src={activeImage} alt="Active Store" />
            <button
              className="arrow-right-fullscreen"
              onClick={() => handleArrowClick(1)} // Navigate to the next image
            >
              &#11208;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stores;
