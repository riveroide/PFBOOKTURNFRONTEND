import axios from "axios";

export const deleteClient = (id) => () => {
  axios.delete(`https://plankton-app-jy8jr.ondigitalocean.app/api/clients/${id}`).catch((error) => error);
};
