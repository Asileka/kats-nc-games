import axios from "axios";
export function getReviews(categoryName) {
  return axios
    .get(`https://kats-nc-games.herokuapp.com/api/reviews/`, {
      params: {
        category: categoryName,
      },
    })
    .then((res) => {
      return res.data.reviews;
    });
}
export function getReviewByID(review_id) {
  return axios
    .get(`https://kats-nc-games.herokuapp.com/api/reviews/${review_id}`)
    .then((res) => {
      return res.data.review;
    });
}
export function getCategories() {
  return axios
    .get(`https://kats-nc-games.herokuapp.com/api/categories`)
    .then((res) => {
      return res.data.categories;
    });
}
export function upVote(review_id) {
  return axios
    .patch(`https://kats-nc-games.herokuapp.com/api/reviews/${review_id}`, {
      inc_votes: 1,
    })
    .catch((err) => {
      console.log(err);
    });
}
export function getComments(review_id) {
  return axios
    .get(
      `https://kats-nc-games.herokuapp.com/api/reviews/${review_id}/comments`
    )
    .then((res) => {
      return res.data.comments;
    });
}
export function sendComment(review_id, input_username, input_body) {
  return axios
    .post(`https://kats-nc-games.herokuapp.com/api/reviews/${review_id}`, {
      username: input_username,
      body: input_body,
    })
    .then((res) => {
      return res.data.comment;
    })
    .catch((err) => {
      console.log(err);
    });
}
