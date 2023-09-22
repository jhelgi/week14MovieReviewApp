import { useState } from "react";
import MovieList from "./components/MovieList";

// Create a global variable for creating new review IDs
let nextReviewId = 10;

// Application function that creates a self-made list of movies, and functions for adding and removing reviews
export default function App() {

  // Variables for our images
  let movieImagePath = "./images/movies/";
  let movieRestrictionPath = "./images/restrictions/";

  // Creates an array of movies  
  const [movieList, setMovieList] = useState([
    {
      movieId: 1,
      title: "Bloodsport",
      img: movieImagePath + "Bloodsport.webp",
      restriction: movieRestrictionPath + "r.webp",
      synopsis: `U.S. soldier Frank Dux has come to Hong Kong to be accepted into the Kumite, a highly secret and extremely violent martial-arts competition. While trying to gain access into the underground world of clandestine fighters, he also has to avoid military officers who consider him to be AWOL. After enduring a difficult training and beginning a romance with journalist Janice Kent, Frank is given the opportunity to fight. But can he survive?`,
    },
    {
      movieId: 2,
      title: "Spider-Man",
      img: movieImagePath + "SpiderMan.jpg",
      restriction: movieRestrictionPath + "pg-13.webp",
      synopsis: `After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy.`,
    },
    {
      movieId: 3,
      title: "WALL-E",
      img: movieImagePath + "Wall-e.jpg",
      restriction: movieRestrictionPath + "g.webp",
      synopsis: `WALL-E, short for Waste Allocation Load Lifter Earth-class, is the last robot left on Earth. He spends his days tidying up the planet, one piece of garbage at a time. But during 700 years, WALL-E has developed a personality, and he's more than a little lonely. Then he spots EVE, a sleek and shapely probe sent back to Earth on a scanning mission. Smitten WALL-E embarks on his greatest adventure yet when he follows EVE across the galaxy.`,
    },
    {
      movieId: 4,
      title: "The Sandlot",
      img: movieImagePath + "TheSandlot.jpg",
      restriction: movieRestrictionPath + "pg.webp",
      synopsis: `When Scottie Smalls moves to a new neighborhood, he manages to make friends with a group of kids who play baseball at the sandlot. Together they go on a series of funny and touching adventures. The boys run into trouble when Smalls borrows a ball from his stepdad that gets hit over a fence.`,
    },
  ]);

  // Creates an array of reviews
  const [reviewList, setReviewList] = useState([]);
  
  // Function for adding reviews
  const addReview = (newReviewData) => {
    const newReview = {
      reviewId: nextReviewId++,
      ...newReviewData,
    }; 
    setReviewList(reviewList.concat(newReview));
  };

  // Function for removing reviews
  const removeReview = (reviewId) => {
    setReviewList(reviewList.filter(review => review.reviewId !== reviewId));
  };

  // Future reference for updating the list...
  // const updateReview = (updatedReview) => {
  //   setReviewList(reviewList.map(review => 
  //     (review.reviewId === updatedReview.reviewId) ?
  //       { ...review, ...updatedReview } :
  //       review
  //   ));
  // };
  
  // This is the MovieList component
  return (
    <MovieList
      movieList={movieList}
      reviewList={reviewList}
      addReview={addReview}
      removeReview={removeReview}
    />
  );
}
