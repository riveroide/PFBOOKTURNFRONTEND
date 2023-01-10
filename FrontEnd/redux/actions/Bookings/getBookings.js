import axios from "axios";
import { getAllBookings, getBookingId } from "redux/reducers/bookingsSlice";

export const getBookings = () => (dispatch) => {
    axios("http://bookturn-deploy-cthq4.ondigitalocean.app/booking")
    .then(res => {dispatch(getAllBookings(res.data))})
    .catch(error => console.log(error))
};

export const getBookingByBusinessId = (id) => (dispatch) => {
    axios(`http://bookturn-deploy-cthq4.ondigitalocean.app/booking/business/${id}`)
    .then(res => dispatch(getBookingId(res.data)))
    .catch(error => console.log(error))
};