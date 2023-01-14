import axios from "axios";

export const deleteBooking = (id) => {
    axios.delete(`${process.env.PATH_BACKEND}/api/booking/${id}`)
    .catch(error => console.log(error))
};