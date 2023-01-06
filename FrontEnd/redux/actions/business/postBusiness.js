import axios from "axios";

export const postBusiness = (data) => () => {
  axios.post("http://localhost:3001/business", data).catch((error) => error);
  
};
