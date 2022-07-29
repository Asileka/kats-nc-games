import React, { useState, useEffect } from "react";
import { sendComment } from "../functions/api";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

const CommentSubmit = () => {
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");
  const { review_id } = useParams();
  const handleSubmitComment = () => {
    sendComment(review_id);
  };
  return (
    <div className="commentSubmit">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <form className="submitComment" onSubmit={handleSubmitComment}>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="username"
            type="text"
          />
          <input
            onChange={(e) => {
              setBody(e.target.value);
            }}
            placeholder="your comment"
            type="text"
          />
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default CommentSubmit;
