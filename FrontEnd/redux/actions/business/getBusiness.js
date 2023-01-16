import { getAllBusiness, getBusinessId, getIdBusiness, getiInfoBusiness } from "redux/reducers/businessSlice";
import axios from "axios";

export const getBusiness = () => (dispatch) => {
  axios(`http://localhost:1336/api/businesses?populate=*`)
    .then((res) => {
      dispatch(getAllBusiness(res.data.data));
    })
    .catch((error) => console.log(error));
};

export const getBusinessById = (id) => (dispatch) => {
  axios(`http://localhost:1336/api/businesses/${id}?populate=*`)
    .then((res) => {
      dispatch(getBusinessId(res.data));
    })
    .catch((error) => console.log(error));
};

export const getBusinessByName = (name) => (dispatch) => {
  axios(
    "http://localhost:1336/api/businesses?populate=*&filters[name][$containsi]=" +
      name
  ).then((res) => {
    dispatch(getAllBusiness(res.data.data));
  });
};

export const getBusinessIdByEmail = (email) => (dispatch) => {
  axios(`http://localhost:1336/api/users?populate=*&filters[email][$contains]=${email}`)
    .then((res) => dispatch(getIdBusiness(res.data[0].business.id)))
    .catch((error) => console.log(error));
};

export const getBusinessData = (id) => (dispatch) => {
  axios(`http://localhost:1336/api/businesses/${id}?populate=*`)
    .then((res) => dispatch(getiInfoBusiness(res.data.data)))
    .catch((error) => console.log(error));
};