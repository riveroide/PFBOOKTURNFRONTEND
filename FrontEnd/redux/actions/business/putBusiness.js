import axios from "axios";

export const putBusiness = (id, data) => () => {
  axios
    .put(`http://bookturn-deploy-cthq4.ondigitalocean.app/business/${id}`, data)
    .catch((error) => error);
};
