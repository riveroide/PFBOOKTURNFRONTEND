import axios from "axios";

export const putBooking = (id, data) => async() => {
    await axios.put(`https://plankton-app-jy8jr.ondigitalocean.app/api/bookings/${id}`, {data:data})
    .catch(error => console.log(error))
};