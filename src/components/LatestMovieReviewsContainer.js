import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'aUYMU1DqFz9P34iQTB3nQW0B5VrGBKIk';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch(URL)
        .then(resp => resp.json())
        .then(json => this.setState({movies: json.results}))
    }


    render() {
        return (
            <div className="latest-movie-reviews">
                <h2>The Latest Reviews:</h2>
                <MovieReviews reviews={this.state.movies}/>        
            </div>
        )
    }
}

export default LatestMovieReviewsContainer