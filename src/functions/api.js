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
