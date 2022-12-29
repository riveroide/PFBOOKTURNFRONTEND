import axios from "axios";

export const postBooking = (data: any) => () => {
    axios.post("http://localhost:3000/booking", data)
    .catch(error => console.log(error))
};