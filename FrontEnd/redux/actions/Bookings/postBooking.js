import axios from "axios";

export const postBooking = (data) => () => {
axios.post(`http://localhost:1337/api/bookings`, {data:data})
.catch(error => console.log(error))
};