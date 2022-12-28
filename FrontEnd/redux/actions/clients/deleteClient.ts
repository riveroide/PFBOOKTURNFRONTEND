import axios from "axios";

export const deleteClient = (id: any) => () => {
  axios.delete(`http://localhost:3000/clients/${id}`).catch((error) => error);
};
