import axios from "axios";

export const deleteBooking = (id) => async()=>{
    await axios.delete(`https://plankton-app-jy8jr.ondigitalocean.app/api/bookings/${id}`)
    .catch(error => console.log(error))
};