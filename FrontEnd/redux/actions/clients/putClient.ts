import axios from "axios";

export const putClient = (id: any, data: any) => () => {
  axios
    .put(`http://localhost:3001/clients/${id}`, data)
    .catch((error) => error);
};
