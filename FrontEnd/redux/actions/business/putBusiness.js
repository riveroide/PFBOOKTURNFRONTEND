import axios from "axios";

export const putBusiness = (id, data) => () => {
  axios
    .put(`http://localhost:1337/api/businesses/${id}`, {data:data})
    .catch((error) => console.log(error));
};
