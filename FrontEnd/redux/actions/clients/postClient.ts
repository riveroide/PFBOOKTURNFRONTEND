import axios from "axios";

export const postClient = (data: any) => () => {
  axios.post("http://localhost:3000/clients", data).catch((error) => error);
};
