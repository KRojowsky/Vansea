import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaCreditCard, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Reviews from "../Reviews/Reviews";
import TopSellers from "../TopSellers/TopSellers";
import placeholder from "../../assets/placeholder.jpg";
import "./ProductDetails.scss";

const ProductDetails = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Znalezienie produktu na podstawie id
  const product = data.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Produkt nie znaleziony</div>;
  }

  // Na podstawie produktu możemy stworzyć dane dla rekomendowanych produktów
  const recommendedProducts = data.filter(
    (item) =>
      item.id !== product.id && item.rating >= 4 && item.reviews >= 160
  );

  return (
    <div className="product-details container py-4">
      <div className="product-container row justify-content-between align-items-center">
        <div className="product-image col-12 col-md-6 mb-3 mb-md-0">
          <img
            src={product.image || placeholder}
            alt={product.name}
            className="img-fluid rounded shadow-sm"
          />
          {/* Zmieniamy link na dynamiczny na podstawie authorId */}
          <Link to={`/designer/${product.authorId}`} className="author-image">
            <img src={product.authorImage || placeholder} alt="Autor" />
          </Link>
        </div>
        <div className="product-info col-12 col-md-6">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">{product.description}</p>

          <div className="product-prices">
            <span className="actual-price">{product.actual_price}</span>
            <span className="old-price">{product.old_price}</span>
          </div>

          {product.rating && (
            <div className="product-rating mb-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar
                  key={index}
                  color={index < product.rating ? "#FFD700" : "#DBDBDB"}
                  size={20}
                />
              ))}
              <span className="ml-2">
                {product.rating} ({product.reviews} recenzji)
              </span>
            </div>
          )}

          <div className="product-actions d-flex gap-3">
            <button
              className="action-button btn btn-primary"
              onClick={() => console.log("Dodano do koszyka")}
            >
              <FaShoppingCart /> Dodaj do koszyka
            </button>
            <button
              className="action-button btn btn-success"
              onClick={() => navigate("/checkout")}
            >
              <FaCreditCard /> Kup teraz
            </button>
          </div>
        </div>
      </div>

      <Reviews reviews={product.productReviews || []} />
      <TopSellers title="Lorem ipsum" data={recommendedProducts} showFullDetails={true} />

      <div className="back-button text-center mt-4">
        <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
          Wróć
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
