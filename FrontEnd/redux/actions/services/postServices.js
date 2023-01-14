import axios from "axios";

export const postServices = (data) => () => {
  try {
    axios.post(`${process.env.PATH_BACKEND}/services`, data)
  } catch (error) {
    console.log(error.message)
  }
};