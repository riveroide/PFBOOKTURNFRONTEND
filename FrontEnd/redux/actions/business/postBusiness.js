import axios from "axios";

export const postBusiness = (data) => async() => {
  await axios.post(`https://plankton-app-jy8jr.ondigitalocean.app/api/businesses`, {data: data}).catch((error) => error);
  
};


