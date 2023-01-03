import axios from "axios";

export const putBusiness = (id, data) => () => {
  axios
    .put(`http://localhost:3001/business/${id}`, data)
    .catch((error) => error);
};
