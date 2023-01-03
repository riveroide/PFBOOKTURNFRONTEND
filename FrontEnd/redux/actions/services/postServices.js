import axios from "axios";

export const postServices = (data) => () => {
  axios.post("http://localhost:3000/services", data).catch((error) => error);
};