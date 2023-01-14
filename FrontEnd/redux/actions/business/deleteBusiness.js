import axios from "axios";

export const deleteBusiness = (id) => () => {
  axios.delete(`${process.env.PATH_BACKEND}/business/${id}`).catch((error) => error);
};
