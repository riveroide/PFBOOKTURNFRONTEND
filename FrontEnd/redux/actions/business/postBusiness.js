import axios from "axios";

export const postBusiness = (data) => () => {
  axios.post(`https://plankton-app-jy8jr.ondigitalocean.app/api/businesses`, {data: data}).catch((error) => error);



};

