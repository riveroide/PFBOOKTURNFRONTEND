import axios from "axios";

export const deleteClient = (id) => () => {
  axios.delete(`http://localhost:3001/clients/${id}`).catch((error) => error);
};
