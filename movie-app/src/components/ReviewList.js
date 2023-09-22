import React from "react";
import Review from "./Review";

// This displays all submitted reviews for each movie
export default function ReviewList(props) {
  
  // This renders the list of reviews
  const reviewList = props.reviewList.filter(
    (review) => review.movieId === props.movieId
  );

  return (
    <div>
      <h5>Audience Reviews</h5>
      {(reviewList.length === 0) ? 
          <span>Be the first to submit a review!</span> : 
          reviewList.map((review) => (
            <Review
              key={review.reviewId}
              review={review}
              strOfStars={props.starDisplay(review.stars)}
              removeReview={props.removeReview}
            />
          ))
      }
    </div>
  );
}