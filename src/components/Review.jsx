import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { getReviewByID } from "../functions/api";
import Categories from "./Categories";
import { useParams } from "react-router-dom";

const Review = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getReviewByID(review_id).then((res) => {
      setReview(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="Review">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <ul className="review-list">
          <li className="review-page" key={review.review_id}>
            <img className="image-review" src={review.review_img_url} />
            <div className="review-2">
              <p>
                <b>{review.title}</b>
              </p>
              <p>Category: {review.category} </p>
              <p>Designer: {review.designer} </p>
              <p>Review author: {review.owner}</p>
              <p>Votes: {review.votes}</p>
              <p>Comments: {review.comment_count}</p>
            </div>

            <div>
              <p>{review.review_body}</p>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Review;
