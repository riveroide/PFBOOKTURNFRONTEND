import axios from "axios";

export const postServices = (data) => () => {
  try {
    axios.post(`http://localhost:1337/api/services`, {data:data})
    // alert("se hizo")
  } catch (error) {
    console.log(error.message)
  }
};