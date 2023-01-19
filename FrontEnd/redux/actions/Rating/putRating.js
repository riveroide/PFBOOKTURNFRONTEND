import axios from "axios";

export const putRating = (id, data) => () => {
  axios
    .put(`https://plankton-app-jy8jr.ondigitalocean.app/api/ratings/${id}`, {data:data})
    .catch((error) => error);
};
