import axios from "axios";
export function getReviews() {
  return axios
    .get(`https://kats-nc-games.herokuapp.com/api/reviews/`)
    .then((res) => {
      return res.data.reviews;
    });
}
export function getCategories() {
  return axios
    .get(`https://kats-nc-games.herokuapp.com/api/categories`)
    .then((res) => {
      return res.data.categories;
    });
}
export function getCategoryReviews(category) {
  return axios
    .get(
      `https://kats-nc-games.herokuapp.com/api/reviews/?category=${category}`
    )
    .then((res) => {
      return res.data.reviews;
    });
}
