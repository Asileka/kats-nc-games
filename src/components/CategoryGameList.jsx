import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { getCategoryReviews } from "../functions/api";
import Categories from "./Categories";
import { useParams } from "react-router-dom";

const CategoryGameList = () => {
  const { category } = useParams();
  const [gamesList, setgamesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getCategoryReviews(category).then((res) => {
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

export default CategoryGameList;
