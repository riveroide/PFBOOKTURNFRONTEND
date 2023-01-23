import axios from "axios";
import {
  getConfirmedBookings,
  getUnconfirmedBookings,
} from "../../reducers/businessaccSlice";

export const BookingsConfirmed = (id) => (dispatch) => {
  axios(
    `https://plankton-app-jy8jr.ondigitalocean.app/api/bookings?populate=*&filters[businesses][id][$eq]=${id}&filters[confirmed][$eq]=true`
  )
    .then((res) => {
      dispatch(getConfirmedBookings(res.data.data));
    })
    .catch((error) => console.log(error));
};

export const BookingsUnconfirmed = (id) => (dispatch) => {
  axios(
    `https://plankton-app-jy8jr.ondigitalocean.app/api/bookings?populate=*&filters[businesses][id][$eq]=${id}&filters[confirmed][$eq]=false`
  )
    .then((res) => {
      dispatch(getUnconfirmedBookings(res.data.data));
    })
    .catch((error) => console.log(error));
};
