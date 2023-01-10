import axios from "axios";

export const postClient = (data) => () => {
  axios.post("http://bookturn-deploy-cthq4.ondigitalocean.app/api/clients", data).catch((error) => console.log(error));
};
