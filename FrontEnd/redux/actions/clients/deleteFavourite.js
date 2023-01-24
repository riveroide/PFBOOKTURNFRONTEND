import axios from "axios";

export const deleteFavourite = (id) => () => {
  axios.delete(`https://plankton-app-jy8jr.ondigitalocean.app/api/favourite-lists/${id}`).catch(error => console.log(error))
}