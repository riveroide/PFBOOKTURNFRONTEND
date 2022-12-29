import axios from "axios";

export const deleteBooking = ( id: any ) => () => {
    axios.delete(`http://localhost:3000/booking/${id}`)
    .catch(error => console.log(error))
};