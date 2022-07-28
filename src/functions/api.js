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
export function getReviewByID(ID) {
  return axios
    .get(`https://kats-nc-games.herokuapp.com/api/reviews/${ID}`)
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
