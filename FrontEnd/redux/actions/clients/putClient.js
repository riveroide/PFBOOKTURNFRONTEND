import axios from "axios";

export const putClient = (id, data) => () => {
  axios
    .put(`http://localhost:1336/api/clients/${id}`, data)
    .catch((error) => error);
};
