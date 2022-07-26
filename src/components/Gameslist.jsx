import React, { useState, useEffect } from "react";
import axios from "axios";

import { useContext } from "react";

const GamesList = (props) => {
  const [gamesList, setgamesList] = useState([]);
  useEffect(() => {
    axios
      .get(`https://kats-nc-games.herokuapp.com/api/reviews/`)
      .then((res) => {
        setgamesList(res.data.reviews);
      });
  }, []);

  return (
    <div className="GameList">
      {gamesList.map((review) => {
        return (
          <div className="grid-review" key={review.review_id}>
            <img className="images" src={review.review_img_url} />
            <p>
              <b>{review.title}</b> <br></br>
              Category: {review.category} <br></br>
              Designer: {review.designer} <br></br>
              Review author: {review.owner}
            </p>
            <p>
              Votes: {review.votes} <br></br>
              Comments: {review.comment_count}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default GamesList;
