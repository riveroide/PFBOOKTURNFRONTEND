import axios from "axios";
import {
  getAllBookings,
  getBookingByBusinessAndClient,
  getBookingId,
} from "redux/reducers/bookingsSlice";

export const getBookings = () => (dispatch) => {
  axios(`http://localhost:1337/api/booking`)
    .then((res) => {
      dispatch(getAllBookings(res.data));
    })
    .catch((error) => console.log(error));
};

export const getBookingByBusinessId = (id) => (dispatch) => {
  axios(`http://localhost:1337/api/booking/${id}`)
    .then((res) => dispatch(getBookingId(res.data)))
    .catch((error) => console.log(error));
};

export const getServicesById = (data) => (dispatch) => {
  axios(
    `http://localhost:1337/api/services?populate=*&filters[email][$contains]=${email}`
  );
};

export const getBookingFromBusinessAndClientId =
  (businessId, clientId) => (dispatch) => {
    axios(
      `http://localhost:1337/api/bookings?filters[businesses][id][$eq]=${businessId}&filters[client][id][$eq]=${clientId}`
    )
      .then((res) => dispatch(getBookingByBusinessAndClient(res.data.data)))
      .catch((err) => console.log(err));
  };
