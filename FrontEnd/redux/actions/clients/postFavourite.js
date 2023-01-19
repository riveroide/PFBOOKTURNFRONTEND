import axios from "axios";

export const postFavourite = (data) => () => {
  axios.post(`https://plankton-app-jy8jr.ondigitalocean.app/api/favourite-lists`, {data: data}).catch((error) => console.log(error));
};
