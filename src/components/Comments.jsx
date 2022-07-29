import React, { useState, useEffect } from "react";
import { getComments } from "../functions/api";
import { useParams } from "react-router-dom";

const Comments = () => {
  const { review_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getComments(review_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="comments">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <ul className="GameList">
          <li>
            <h4>Comments</h4>
          </li>
          {comments.length === 0 ? (
            <p>No Comments Yet</p>
          ) : (
            comments.map((comments) => {
              return (
                <li className="grid-comments" key={comments.comments_id}>
                  <div>
                    <p>
                      <u>Author:</u> <b>{comments.author}</b>{" "}
                    </p>
                    <p>
                      <u>Date posted:</u> {comments.created_at.split("T")[0]}{" "}
                    </p>
                  </div>
                  <div className="comment-body">
                    <p>{comments.body}</p>
                  </div>
                </li>
              );
            })
          )}
        </ul>
      )}
    </div>
  );
};

export default Comments;
