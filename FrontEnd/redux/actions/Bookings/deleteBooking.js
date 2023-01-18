import axios from "axios";

export const deleteBooking = (id) => {
    axios.delete(`https://plankton-app-jy8jr.ondigitalocean.app/api/booking/${id}`)
    .catch(error => console.log(error))
};