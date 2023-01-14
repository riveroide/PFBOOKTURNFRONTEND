import axios from "axios";

export const putClient = (id, data) => () => {
  axios
    .put(`${process.env.PATH_BACKEND}/api/clients/${id}`, data)
    .catch((error) => error);
};
