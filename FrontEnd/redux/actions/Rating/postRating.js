import axios from "axios";

export const postRating = (data) => () => {
  axios.post(`https://plankton-app-jy8jr.ondigitalocean.app/api/ratings`, {data:data}).catch((error) => console.log(error));

};
