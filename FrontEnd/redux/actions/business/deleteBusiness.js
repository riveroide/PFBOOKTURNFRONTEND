import axios from "axios";

export const deleteBusiness = (id) => () => {
  axios.delete(`http://localhost:1337/business/${id}`).catch((error) => error);
};
