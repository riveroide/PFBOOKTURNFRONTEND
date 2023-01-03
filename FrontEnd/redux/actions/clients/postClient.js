import axios from "axios";

export const postClient = (data) => () => {
  axios.post("http://localhost:3001/clients", data).catch((error) => error);
};
