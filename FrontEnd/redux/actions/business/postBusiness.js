import axios from "axios";

export const postBusiness = (data) => () => {
  axios.post("http://bookturn-deploy-cthq4.ondigitalocean.app/api/businesses", {data: data}).catch((error) => error);
  
};
