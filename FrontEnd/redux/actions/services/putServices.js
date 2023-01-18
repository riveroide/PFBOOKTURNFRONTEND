import axios from "axios";

export const putServices = (id, data) => () => {
  axios.put(`https://plankton-app-jy8jr.ondigitalocean.app/api/services/${id}`, {data:data})
  .catch((error) => console.log(error));
};
