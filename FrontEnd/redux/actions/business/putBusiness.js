import axios from "axios";

export const putBusiness = (id, data) => () => {
  axios
    .put(`${process.env.PATH_BACKEND}/business/${id}`, data)
    .catch((error) => error);
};
