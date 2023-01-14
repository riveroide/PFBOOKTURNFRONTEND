import axios from "axios";

export const postClient = (data) => () => {
  axios.post(`${process.env.PATH_BACKEND}/api/clients`, data).catch((error) => console.log(error));
};
