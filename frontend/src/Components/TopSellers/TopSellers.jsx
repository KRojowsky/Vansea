import React, { useRef, useState, useEffect } from "react";
import "./TopSellers.scss";
import placeholder from "../../assets/placeholder.jpg";

const TopSellersData = [
  { image: placeholder, link: "#", name: "Lorem ipsum" },
  { image: placeholder, link: "#", name: "Lorem ipsum" },
  { image: placeholder, link: "#", name: "Lorem ipsum" },
  { image: placeholder, link: "#", name: "Lorem ipsum" },
  { image: placeholder, link: "#", name: "Lorem ipsum" },
];

const TopSellers = () => {
  const containerRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const checkIfArrowsShouldBeVisible = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = containerRef.current.scrollWidth;
        setShowArrows(contentWidth > containerWidth);
      }
    };

    checkIfArrowsShouldBeVisible();

    window.addEventListener("resize", checkIfArrowsShouldBeVisible);

    return () => {
      window.removeEventListener("resize", checkIfArrowsShouldBeVisible);
    };
  }, []);

  return (
    <div className="top-sellers">
      <h2 className="title">Lorem ipsum</h2>

      {showArrows && (
        <button className="arrow-left" onClick={scrollLeft}>&#11207;</button>
      )}

      <div className="container" ref={containerRef}>
        <div className="cards">
          {TopSellersData.map((card, index) => (
            <div className="card" key={index}>
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                <img src={card.image} alt={`Card ${index + 1}`} />
                <p className="card-name">{card.name}</p>
                <p className="card-description">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <button className="arrow-right" onClick={scrollRight}>&#11208;</button>
      )}
    </div>
  );
};

export default TopSellers;
