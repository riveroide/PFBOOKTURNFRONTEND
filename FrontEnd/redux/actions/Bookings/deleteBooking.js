import axios from "axios";

export const deleteBooking = (id) => {
    axios.delete(`http://localhost:1336/api/booking/${id}`)
    .catch(error => console.log(error))
};