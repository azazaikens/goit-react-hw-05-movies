import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestReviews } from "services/api";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviewsData, setReviewsData] = useState(null);

    useEffect(() => {
      if (!movieId) {
        return;
      }
      const fetchReviews = async () => {
        try {
          const result = await requestReviews(movieId);
          setReviewsData(result);
          console.log(result);
        } catch (error) {
          console.error(error);
        }
      };
      fetchReviews();
    }, [movieId]);

    return (
      <>
        {!reviewsData || reviewsData.results.length === 0 ? (
          <p>
            We don't have any reviews for this movie.
          </p>
        ) : (
          <ul>
            {reviewsData?.results?.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
}

export default Reviews;