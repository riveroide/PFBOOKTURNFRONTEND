import axios from "axios";

export const postBusiness = (data) => () => {
  axios.post("http://localhost:1337/api/businesses", {data: data}).catch((error) => error);
};
