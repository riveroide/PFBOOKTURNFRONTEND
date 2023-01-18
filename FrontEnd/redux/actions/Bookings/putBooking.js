import axios from "axios";

export const putBooking = (id, data) => () => {
    axios.put(`https://plankton-app-jy8jr.ondigitalocean.app/booking/${id}`, data)
    .catch(error => console.log(error))
};