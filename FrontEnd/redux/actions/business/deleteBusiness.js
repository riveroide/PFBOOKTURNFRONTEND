import axios from "axios";

export const deleteBusiness = (id) => () => {
  axios.delete(`http://localhost:1336/business/${id}`).catch((error) => error);
};
