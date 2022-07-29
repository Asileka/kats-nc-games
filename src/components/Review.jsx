import React, { useState, useEffect } from "react";
import { getReviewByID, upVote } from "../functions/api";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

const Review = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [votes, setVotes] = useState(0);
  useEffect(() => {
    setIsLoading(true);
    getReviewByID(review_id).then((review) => {
      setReview(review);
      setVotes(review.votes);
      setIsLoading(false);
    });
  }, []);
  const handleUpvoteClick = () => {
    setVotes((votes) => votes + 1);
    upVote(review_id);
  };
  return (
    <div className="Review">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="review-list">
          <div className="review-page" key={review.review_id}>
            <img className="image-review" src={review.review_img_url} />
            <div className="review-2">
              <h3 className="review-title">
                <b>{review.title}</b>
              </h3>
              <p>Category: {review.category} </p>
              <p>Designer: {review.designer} </p>
              <p>Review author: {review.owner}</p>
              <p>Votes: {votes}</p>
              <p>Comments: {review.comment_count}</p>
            </div>
          </div>
          <div className="review-body">
            <p>{review.review_body}</p>
          </div>
          <div className="votes">
            <p>Votes: {votes}</p>
            <button onClick={handleUpvoteClick} className="buttonVote">
              +
            </button>
          </div>
          <div>
            <Comments />
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;
