import React, { Component } from "react";
import MovieReviews from "./MovieReviews";
import "isomorphic-fetch";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
    };
  }

  // Fetch a list of the most recent reviews and display them
  componentDidMount() {
    fetch(URL)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          reviews: data.results,
        })
      );
  }
  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default LatestMovieReviewsContainer;
