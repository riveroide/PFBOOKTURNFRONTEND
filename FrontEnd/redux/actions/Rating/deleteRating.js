import axios from "axios";

export const deleteRating = (id) => () => {
  axios.delete(`http://localhost:1337/api/ratings/${id}`).catch((error) => error);
};
