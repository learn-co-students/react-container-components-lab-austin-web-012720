  
import React from 'react';

const Review = (review) => {
  return (
    <div key={review.display_title} className='review'>
      <header>
        <a href={review.link.url}>{review.display_title}</a>
        <br/>
        <span>{review.byline}</span>
      </header>
      <h5>{review.summary_short}</h5>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;


export default MovieReviews;


