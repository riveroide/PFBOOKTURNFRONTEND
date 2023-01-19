import axios from "axios";

export const deleteRating = (id) => () => {
  axios.delete(`https://plankton-app-jy8jr.ondigitalocean.app/api/ratings/${id}`).catch((error) => error);
};
