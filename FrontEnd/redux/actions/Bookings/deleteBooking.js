import axios from "axios";

export const deleteBooking = (id) => {
    axios.delete(`https://plankton-app-jy8jr.ondigitalocean.app/api/bookings/${id}`)
    .catch(error => console.log(error))
};