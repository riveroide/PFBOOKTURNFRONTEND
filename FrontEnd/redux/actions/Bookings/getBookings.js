import axios from "axios";
import { getAllBookings, getBookingId } from "redux/reducers/bookingsSlice";

export const getBookings = () => (dispatch) => {
    axios(`https://plankton-app-jy8jr.ondigitalocean.app/api/booking`)
    .then(res => {dispatch(getAllBookings(res.data))})
    .catch(error => console.log(error))
};

export const getBookingByBusinessId = (id) => (dispatch) => {
    axios(`https://plankton-app-jy8jr.ondigitalocean.app/api/booking/business/${id}`)
    .then(res => dispatch(getBookingId(res.data)))
    .catch(error => console.log(error))
};

export const getServicesById = (data) => (dispatch) =>{
      axios(`https://plankton-app-jy8jr.ondigitalocean.app/api/services?populate=*&filters[email][$contains]=${email}`)
    }