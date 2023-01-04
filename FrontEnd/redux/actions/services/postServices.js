import axios from "axios";

export const postServices = (data) => () => {
  try {
    axios.post("http://localhost:3000/services", data)
  } catch (error) {
    console.log(error.message)
  }
};