import axios from "axios";

export const putClient = (id, data) => () => {
  axios
    .put(`https://plankton-app-jy8jr.ondigitalocean.app/api/clients/${id}`, data)
    .catch((error) => error);
};
