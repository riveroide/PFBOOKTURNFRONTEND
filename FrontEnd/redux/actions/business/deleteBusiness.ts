import axios from "axios";

export const deleteBusiness = (id: any) => () => {
  axios.delete(`http://localhost:3000/business/${id}`).catch((error) => error);
};
