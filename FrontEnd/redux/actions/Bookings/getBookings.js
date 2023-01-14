import axios from "axios";
import { getAllBookings, getBookingId } from "redux/reducers/bookingsSlice";

export const getBookings = () => (dispatch) => {
    axios(`${process.env.PATH_BACKEND}/api/booking`)
    .then(res => {dispatch(getAllBookings(res.data))})
    .catch(error => console.log(error))
};

export const getBookingByBusinessId = (id) => (dispatch) => {
    axios(`${process.env.PATH_BACKEND}/api/booking/business/${id}`)
    .then(res => dispatch(getBookingId(res.data)))
    .catch(error => console.log(error))
};