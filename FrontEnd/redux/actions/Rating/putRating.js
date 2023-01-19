import axios from "axios";

export const putRating = (id, data) => () => {
  axios
    .put(`http://localhost:1337/api/ratings/${id}`, {data:data})
    .catch((error) => error);
};
