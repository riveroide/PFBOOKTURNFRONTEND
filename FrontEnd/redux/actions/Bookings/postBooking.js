import axios from "axios";

export const postBooking = (data) => () => {
    axios.post(`${process.env.PATH_BACKEND}/booking`, data)
    .catch(error => console.log(error))
};