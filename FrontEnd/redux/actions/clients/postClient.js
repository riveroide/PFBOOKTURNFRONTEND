import axios from "axios";

export const postClient = (data) => () => {
  axios.post(`http://localhost:1336/api/clients`, data).catch((error) => console.log(error));
};
