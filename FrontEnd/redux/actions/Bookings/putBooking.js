import axios from "axios";

export const putBooking = (id, data) => () => {
    axios.put(`${process.env.PATH_BACKEND}/booking/${id}`, data)
    .catch(error => console.log(error))
};