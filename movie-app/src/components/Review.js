import React from "react";

// Function that displays each movie review after they've been submitted
export default function Review(props) {
    
  return (
    <div className="p-2 border-top border-secondary row">
      <div className="col-sm-6">
        {props.review.user} ({props.review.date})<br/><h6>Rating: {props.strOfStars}</h6>
      </div>
      <div className="col-sm-6">
        <button className="btn btn-danger mt-3 mb-2 btn-sm right-aligned" onClick={() => props.removeReview(props.review.reviewId)}>
          Delete
        </button>
      </div>
      <div className="col-sm-12">{props.review.content}</div>
    </div>
  );
}