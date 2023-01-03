import axios from "axios";

export const putClient = (id, data) => () => {
  axios
    .put(`http://localhost:3001/clients/${id}`, data)
    .catch((error) => error);
};
