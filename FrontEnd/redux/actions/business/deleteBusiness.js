import axios from "axios";

export const deleteBusiness = (id) => () => {
  axios.delete(`http://bookturn-deploy-cthq4.ondigitalocean.app/business/${id}`).catch((error) => error);
};
