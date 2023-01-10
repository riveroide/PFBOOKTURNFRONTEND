import axios from "axios";

export const postServices = (data) => () => {
  try {
    axios.post("http://bookturn-deploy-cthq4.ondigitalocean.app/services", data)
  } catch (error) {
    console.log(error.message)
  }
};