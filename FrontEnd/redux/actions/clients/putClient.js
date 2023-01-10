import axios from "axios";

export const putClient = (id, data) => () => {
  axios
    .put(`http://bookturn-deploy-cthq4.ondigitalocean.app/api/clients/${id}`, data)
    .catch((error) => error);
};
