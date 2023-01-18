import axios from "axios";

export const putFavourite = (id, data) => () => {
  axios.put(`https://plankton-app-jy8jr.ondigitalocean.app/api/favourite-lists/${id}`, {data: data}).catch((error) => console.log(error));
};
