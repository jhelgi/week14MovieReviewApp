import "./Stars.css";

// Component that displays a 5 star rating
export default function Stars(props) {
  
  // This changes the star rating to whatever the user clicks on
  const handleClick = (rating) => {
    if (props.rating !== rating) props.setRating(rating);
    else if (props.rating === rating) props.setRating(0);
  };

  // Render 5 stars and fills them depending on what is clicked
  return (
    <div>
      <span className="star" onClick={() => handleClick(1)}>
        {props.rating >= 1 ? "\u2605" : "\u2606"}
      </span>
      <span className="star" onClick={() => handleClick(2)}>
        {props.rating >= 2 ? "\u2605" : "\u2606"}
      </span>
      <span className="star" onClick={() => handleClick(3)}>
        {props.rating >= 3 ? "\u2605" : "\u2606"}
      </span>
      <span className="star" onClick={() => handleClick(4)}>
        {props.rating >= 4 ? "\u2605" : "\u2606"}
      </span>
      <span className="star" onClick={() => handleClick(5)}>
        {props.rating >= 5 ? "\u2605" : "\u2606"}
      </span>
    </div>
  );
}