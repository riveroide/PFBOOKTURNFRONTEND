import axios from "axios";

export const postServices = (data) => () => {
  try {
    axios.post(`https://plankton-app-jy8jr.ondigitalocean.app/api/services`, {data:data})
  } catch (error) {
    console.log(error.message)
  }
};