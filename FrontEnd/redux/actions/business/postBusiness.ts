import axios from "axios";

export const postBusiness = (data: any) => () => {
  axios.post("http://localhost:3000/business", data).catch((error) => error);
};
