import axios from "axios";

export const deleteClient = (id) => () => {
  axios.delete(`http://plankton-app-jy8jr.ondigitalocean.app/api/clients/${id}`).catch((error) => error);
};
