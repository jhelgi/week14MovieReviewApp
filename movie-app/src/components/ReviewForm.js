import { useState } from "react";
import Stars from "./Stars";

// A form that displays the info entered by the user when submitting their review
export default function ReviewForm(props) {

  // The state of a review.
  const [userValue, setUserValue] = useState("");
  const [starsValue, setStarsValue] = useState(0);
  const [contentValue, setContentValue] = useState("");

  // Prevent default form submission behavior
  const handleSubmit = (event) => {
    event.preventDefault();
    let today = new Date().toLocaleDateString();
    props.addReview({
      movieId: props.movie.movieId,
      user: userValue,
      date: today,
      stars: Number(starsValue),
      content: contentValue,
    });
    setUserValue("");
    setStarsValue(0);
    setContentValue("");
  };

  // Renders a new form for submitting a new review
  return (
    <form>
      <h5>Review {props.movie.title}</h5>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={userValue}
              onChange={(e) => setUserValue(e.target.value)}
            />
          </div>
          <div className="col-sm-6 pt-4">
            <Stars rating={starsValue} setRating={setStarsValue} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <label className="form-label">Comments</label>
            <input
              type="text"
              className="form-control"
              value={contentValue}
              onChange={(e) => setContentValue(e.target.value)}
            />
          </div>
        </div>
      </div>
      <button
        className="btn btn-success mt-3 mb-2 btn-sm"
        onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}