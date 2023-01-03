import axios from "axios";

export const deleteBusiness = (id) => () => {
  axios.delete(`http://localhost:3001/business/${id}`).catch((error) => error);
};
