import axios from "axios";

export const postBooking = (data) => () => {
    axios.post("http://bookturn-deploy-cthq4.ondigitalocean.app/booking", data)
    .catch(error => console.log(error))
};