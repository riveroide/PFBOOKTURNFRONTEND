import axios from "axios";

export const putBooking = (id, data) => () => {
    axios.put(`http://localhost:1337/booking/${id}`, data)
    .catch(error => console.log(error))
};