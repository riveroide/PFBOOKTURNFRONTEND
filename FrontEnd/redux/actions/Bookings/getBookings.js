import axios from "axios";
import { getAllBookings, getBookingId } from "redux/reducers/bookingsSlice";

export const getBookings = () => (dispatch) => {
    axios(`http://localhost:1336/api/booking`)
    .then(res => {dispatch(getAllBookings(res.data))})
    .catch(error => console.log(error))
};

export const getBookingByBusinessId = (id) => (dispatch) => {
    axios(`http://localhost:1336/api/booking/${id}`)
    .then(res => dispatch(getBookingId(res.data)))
    .catch(error => console.log(error))
};

export const getServicesById = (data) => (dispatch) =>{
      axios(`http://localhost:1336/api/services?populate=*&filters[email][$contains]=${email}`)
    }