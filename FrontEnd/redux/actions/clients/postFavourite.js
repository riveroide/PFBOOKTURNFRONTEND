import axios from "axios";

export const postFavourite = (data) => () => {
  axios.post(`http://localhost:1337/api/favourite-lists`, {data: data}).catch((error) => console.log(error));
};
