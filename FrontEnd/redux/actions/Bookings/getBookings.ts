import axios from "axios";
import { getAllBookings, getBookingId } from "redux/reducers/bookingsSlice";

export const getBookings = () => (dispatch: any) => {
    axios("http://localhost:3000/booking")
    .then(res => {dispatch(getAllBookings(res.data))})
    .catch(error => console.log(error))
};

export const getBookingByBusinessId = (id: number) => (dispatch: any) => {
    axios(`http://localhost:3000/booking/business/${id}`)
    .then(res => dispatch(getBookingId(res.data)))
    .catch(error => console.log(error))
};