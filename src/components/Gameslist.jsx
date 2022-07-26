import React, { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { getReviews } from "../functions/api";

const GamesList = () => {
  const [gamesList, setgamesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getReviews().then((res) => {
      setgamesList(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="GameList">
          {gamesList.map((review) => {
            return (
              <div className="grid-review" key={review.review_id}>
                <img className="images" src={review.review_img_url} />
                <li>
                  <ul>
                    <b>{review.title}</b>
                  </ul>
                  <ul>Category: {review.category} </ul>
                  <ul>Designer: {review.designer} </ul>
                  <ul>Review author: {review.owner}</ul>
                </li>
                <li>
                  <ul>Votes: {review.votes}</ul>
                  <ul>Comments: {review.comment_count}</ul>
                </li>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GamesList;
