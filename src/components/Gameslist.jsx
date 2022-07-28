import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { getReviews } from "../functions/api";
import Categories from "./Categories";
import { useParams } from "react-router-dom";

const GamesList = () => {
  const { category } = useParams();
  const [gamesList, setgamesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getReviews(category).then((res) => {
      setgamesList(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <Categories />
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <ul className="GameList">
          {gamesList.map((review) => {
            return (
              <li className="grid-review" key={review.review_id}>
                <img className="images" src={review.review_img_url} />
                <div>
                  <p>
                    <b>{review.title}</b>
                  </p>
                  <p>Category: {review.category} </p>
                  <p>Designer: {review.designer} </p>
                  <p>Review author: {review.owner}</p>
                </div>
                <div>
                  <p>Votes: {review.votes}</p>
                  <p>Comments: {review.comment_count}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default GamesList;
