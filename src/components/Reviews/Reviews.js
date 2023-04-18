import axios from 'axios';
import { getMovieReviewsUrl } from 'moviesApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const {
        data: { results },
      } = await axios.get(getMovieReviewsUrl(movieId));
      setReviews(results);
    };

    fetchReviews();
  }, [movieId]);
  return (
    <div>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
