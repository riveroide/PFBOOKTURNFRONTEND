import axios from "axios";

export const putFavourite = (id, data) => () => {
  axios.put(`http://localhost:1337/api/favourite-lists/${id}`, {data: data}).catch((error) => console.log(error));
};