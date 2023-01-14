import axios from "axios";

export const deleteClient = (id) => () => {
  axios.delete(`${process.env.PATH_BACKEND}/api/clients/${id}`).catch((error) => error);
};
