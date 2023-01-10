import axios from "axios";

export const deleteClient = (id) => () => {
  axios.delete(`http://bookturn-deploy-cthq4.ondigitalocean.app/clients/${id}`).catch((error) => error);
};
