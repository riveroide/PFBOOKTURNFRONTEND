import axios from "axios";

export const putBusiness = (id, data) => () => {
  axios
    .put(`http://localhost:1336/api/businesses/${id}`, {data:data})
    .catch((error) => console.log(error));
};
