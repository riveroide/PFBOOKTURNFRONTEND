import axios from "axios";

export const putServices = (id, data) => () => {
  axios
    .put(`http://localhost:1336/api/services/${id}`, {data:data})
    .catch((error) => console.log(error));
};
