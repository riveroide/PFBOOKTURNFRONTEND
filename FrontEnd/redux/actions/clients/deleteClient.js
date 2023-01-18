import axios from "axios";

export const deleteClient = (id) => () => {
  axios.delete(`http://localhost:1336/api/clients/${id}`).catch((error) => error);
};
