import axios from "axios";

export const putBooking = (id, data) => () => {
    axios.put(`http://bookturn-deploy-cthq4.ondigitalocean.app/booking/${id}`, data)
    .catch(error => console.log(error))
};