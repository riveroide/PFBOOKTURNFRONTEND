import axios from "axios";

export const postBusiness = (data) => () => {
  axios.post(`${process.env.PATH_BACKEND}/api/businesses`, {data: data}).catch((error) => error);
};
