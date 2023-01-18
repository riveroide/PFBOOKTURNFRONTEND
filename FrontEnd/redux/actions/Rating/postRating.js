import axios from "axios";

export const postRating = (data) => () => {
  axios.post(`http://localhost:1337/api/ratings`, {data:data}).catch((error) => console.log(error));

};
