import axios from "axios";

export const postServices = (data) => () => {
  try {
    axios.post("http://localhost:1336/services", data)
  } catch (error) {
    console.log(error.message)
  }
};