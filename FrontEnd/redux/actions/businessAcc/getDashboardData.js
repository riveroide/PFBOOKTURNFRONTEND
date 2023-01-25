import axios from "axios";
import {
  getConfirmedBookings,
  getUnconfirmedBookings,
  getIdBusiness,
  getiInfoBusiness,
  cleanData
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

export const getBusinessIdByEmail = (email) => async(dispatch) => {
  await axios(`https://plankton-app-jy8jr.ondigitalocean.app/api/users?populate=*&filters[email][$contains]=${email}`)
    .then((res) => dispatch(getIdBusiness(res.data[0]?.business.id)))
    .catch((error) => console.log(error));
};

export const getBusinessData = (id) => async (dispatch) => {
  console.log(id)
  await axios(`https://plankton-app-jy8jr.ondigitalocean.app/api/businesses/?populate=*&filters[id][$eq]=${id}`)
    .then((res) => dispatch(getiInfoBusiness(res.data.data)))
    .catch((error) => console.log(error));

};

export const clean =() => (dispatch) =>{
  dispatch(cleanData())
}