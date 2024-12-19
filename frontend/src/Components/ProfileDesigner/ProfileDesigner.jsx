import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Reviews from "../Reviews/Reviews";
import TopSellers from "../TopSellers/TopSellers";
import Stores from "../Stores/Stores";
import placeholder from "../../assets/placeholder.jpg";

const DesignerProfile = ({ designersData }) => {
  const { id } = useParams();

  const designer = designersData.find((designer) => designer.id === parseInt(id));

  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowToggle = () => {
    setIsFollowing((prev) => !prev);
  };

  if (!designer) {
    return <div>Projektant nie znaleziony</div>;
  }

  return (
    <div className="designer-profile container py-4">
      <div className="designer-info row justify-content-center align-items-center mb-4">
        <div className="designer-image col-md-3 mb-4 mb-md-0">
          <img
            src={designer.image || placeholder}
            alt={designer.name}
            className="img-fluid rounded-circle shadow"
          />
        </div>
        <div className="designer-details col-md-8">
          <h2 className="designer-name">{designer.name}</h2>
          <p className="designer-description">{designer.description}</p>
          <button
            className={`btn ${isFollowing ? "btn-danger" : "btn-primary"}`}
            onClick={handleFollowToggle}
          >
            {isFollowing ? "Obserwujesz" : "Obserwuj"}
          </button>
        </div>
      </div>

      {/* Stories Section */}
      <div className="designer-stories mb-4">
        <Stores
          storesData={
            designer.stories && designer.stories.length > 0
              ? designer.stories
              : [
                  { image: placeholder, link: "#" },
                  { image: placeholder, link: "#" },
                ]
          }
        />
      </div>

      <Reviews reviews={designer.reviews} />
      <TopSellers
        title="Projekty"
        data={designer.projects.map((project) => ({
          name: project.name,
          image: project.image || placeholder,
          description: project.description,
          link: `/project/${project.id}`,
          actual_price: project.actual_price,
          old_price: project.old_price,
          rating: project.rating,
          reviews: project.reviews,
        }))}
        showFullDetails={true}
      />
    </div>
  );
};

export default DesignerProfile;
