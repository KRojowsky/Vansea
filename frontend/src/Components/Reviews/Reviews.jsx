import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Reviews.scss';

const Reviews = ({ reviews }) => {
  return (
    <div className="reviews">
      <h3>Opinie</h3>
      <div className="review-list">
        {reviews.map((review, index) => (
          <div className="review-item" key={index}>
            <div className="review-header">
              <img src={review.userImage || 'https://via.placeholder.com/50'} alt={review.username} className="review-avatar"/>
              <div className="review-user-info">
                <span className="review-username">{review.username}</span>
                <span className="review-date">{review.date}</span>
              </div>
            </div>
            <div className="review-rating">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <FaStar
                  key={starIndex}
                  color={starIndex < review.rating ? '#FFD700' : '#DBDBDB'}
                />
              ))}
            </div>
            <p className="review-text">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
