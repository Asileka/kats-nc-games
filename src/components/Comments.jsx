import React, { useState, useEffect } from "react";
import { getComments } from "../functions/api";
import { useParams } from "react-router-dom";

const Comments = () => {
  const { review_id } = useParams();
  const [comments, setcomments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getComments(review_id).then((comments) => {
      setcomments(comments);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="comments">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <ul className="GameList">
          {comments.map((comments) => {
            return (
              <li className="grid-comments" key={comments.comments_id}>
                <div>
                  <p>Category: {comments.category} </p>
                  <p>Designer: {comments.designer} </p>
                  <p>comments author: {comments.owner}</p>
                </div>
                <div>
                  <p>Votes: {comments.votes}</p>
                  <p>Comments: {comments.comment_count}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Comments;
