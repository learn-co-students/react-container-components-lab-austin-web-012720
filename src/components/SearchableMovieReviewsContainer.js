import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'aUYMU1DqFz9P34iQTB3nQW0B5VrGBKIk';
const KEY = `&api-key=aUYMU1DqFz9P34iQTB3nQW0B5VrGBKIk`;
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';
            


// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            search: '',
            reviews: []
        }
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    };

    handleSubmit = (event) => {

        event.preventDefault();
        console.log("fetch?")
        fetch(`${URL}${this.state.search}${KEY}`)
        .then(resp => resp.json())
        .then(json => {
            //console.log(json);
            this.setState({reviews: json.results})
        })
        
    }

    render() {
        return (
            <div class="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label>Search:</label>
                    <input type="text" 
                            onChange={this.handleChange} 
                            value={this.state.search}></input>
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
