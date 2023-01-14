import axios from "axios";

export const postBooking = (data) => () => {
    axios.post("http://localhost:1336/booking", data)
    .catch(error => console.log(error))
};