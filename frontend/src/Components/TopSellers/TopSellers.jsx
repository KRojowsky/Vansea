import React, { useRef, useState, useEffect } from "react";
import "./TopSellers.scss";
import { FaStar } from "react-icons/fa"; // Importujemy ikonę gwiazdki

const TopSellers = ({ title, data, showFullDetails }) => {
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
      <h2 className="title">{title}</h2>

      {showArrows && (
        <button className="arrow-left" onClick={scrollLeft}>
          &#11207;
        </button>
      )}

      <div className="container" ref={containerRef}>
        <div className="cards">
          {data.map((card, index) => (
            <div className="card" key={index}>
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                <img src={card.image} alt={`Card ${index + 1}`} />
                <p className="card-name">{card.name}</p>

                {/* Wyświetlanie tylko nazwy i opisu w pierwszym przypadku */}
                <p className="card-description">{card.description}</p>

                {/* Wyświetlanie cen i oceny tylko w przypadku, gdy showFullDetails jest true */}
                {showFullDetails && (
                  <>
                    <div className="prices">
                      <p className="actual-price">{card.actual_price}</p>
                      <p className="old-price">{card.old_price}</p>
                    </div>

                    {card.rating && (
                      <div className="card-rating">
                        <span>
                          {Array.from({ length: 5 }).map((_, i) => (
                            <FaStar
                              key={i}
                              color={i < card.rating ? "#FFD700" : "#DBDBDB"}
                              style={{ marginRight: "4px" }}
                            />
                          ))}
                        </span>
                        <span>{card.rating} ({card.reviews})</span>
                      </div>
                    )}
                  </>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <button className="arrow-right" onClick={scrollRight}>
          &#11208;
        </button>
      )}
    </div>
  );
};

export default TopSellers;
