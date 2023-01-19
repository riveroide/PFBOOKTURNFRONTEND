import axios from "axios";

export const postBooking = (data) => () => {
axios.post(`https://plankton-app-jy8jr.ondigitalocean.app/api/bookings`, {data:data})
.catch(error => console.log(error))
};