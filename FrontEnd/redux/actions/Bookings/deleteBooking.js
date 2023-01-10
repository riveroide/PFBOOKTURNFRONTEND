import axios from "axios";

export const deleteBooking = (id) => {
    axios.delete(`http://bookturn-deploy-cthq4.ondigitalocean.app/booking/${id}`)
    .catch(error => console.log(error))
};