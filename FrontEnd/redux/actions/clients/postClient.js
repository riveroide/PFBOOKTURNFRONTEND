import axios from "axios";

export const postClient = (data) => () => {
  axios.post(`https://plankton-app-jy8jr.ondigitalocean.app/api/clients`, {data:data}).catch((error) => console.log(error));

};
