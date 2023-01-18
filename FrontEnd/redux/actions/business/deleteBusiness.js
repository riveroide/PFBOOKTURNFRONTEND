import axios from "axios";

export const deleteBusiness = (id) => () => {
  axios.delete(`https://plankton-app-jy8jr.ondigitalocean.app/business/${id}`).catch((error) => error);
};
