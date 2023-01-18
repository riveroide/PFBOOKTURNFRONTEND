import axios from "axios";

export const putBusiness = (id, data) => () => {
  axios
    .put(`https://plankton-app-jy8jr.ondigitalocean.app/api/businesses/${id}`, {data:data})
    .catch((error) => console.log(error));
};
