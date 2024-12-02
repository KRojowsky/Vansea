import React, {useRef} from "react";
import "./Stores.scss";
import placeholder from "../../assets/placeholder.jpg";

const storesData = [
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
  { image: placeholder, link: "#" },
];

const Stores = () => {

  const storesContainerRef = useRef(null);
  
  const scrollLeft = () => {
    if(storesContainerRef.current) {
      storesContainerRef.current.scrollBy({left: -400, behavior: "smooth"});
    }
  }

  const scrollRight = () => {
    if(storesContainerRef.current) {
      storesContainerRef.current.scrollBy({left: 400, behavior: "smooth"});
    }
  }

  return (
    <div className="stores">

        <button className="arrow-left" onClick={scrollLeft}>&#11207;</button>

        <div className="stores-container" ref={storesContainerRef}>
        {storesData.map((store, index) => (
            <div className="store" key={index}>
                <a href={store.link} target="_blank" rel="noopener noreferrer">
                    <img src={store.image} alt={`Store ${index + 1}`} />
                </a>
            </div>
        ))}
        </div>

        <button className="arrow-right" onClick={scrollRight}>&#11208;</button>
    </div>
  );
};

export default Stores;
