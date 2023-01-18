import { getAllBusiness, getBusinessId, getIdBusiness, getiInfoBusiness } from "redux/reducers/businessSlice";
import axios from "axios";

export const getBusiness = () => (dispatch) => {
  axios(`https://plankton-app-jy8jr.ondigitalocean.app/api/businesses?populate=*`)
    .then((res) => {
      dispatch(getAllBusiness(res.data.data));
    })
    .catch((error) => console.log(error));
};

export const getBusinessById = (id) => (dispatch) => {
  axios(`https://plankton-app-jy8jr.ondigitalocean.app/api/businesses/${id}?populate=*`)
    .then((res) => {
      dispatch(getBusinessId(res.data));
    })
    .catch((error) => console.log(error));
};

export const getBusinessByName = (name) => (dispatch) => {
  axios(
    `https://plankton-app-jy8jr.ondigitalocean.app/api/businesses?populate=*&filters[name][$containsi]=` +
      name
  ).then((res) => {
    if (!res.data.data.length) return alert("No se encontraron resultados")
    dispatch(getAllBusiness(res.data.data));
  }).catch((error) => console.log(error))
};

export const getBusinessByEmail = (email) => (dispatch) => {
  axios(`https://plankton-app-jy8jr.ondigitalocean.app/api/businesses?populate=*&filters[email][$containsi]=` +
  email)
    .then((res) => {
      dispatch(getBusinessEmail(res.data.data));
    })
    .catch((error) => console.log(error.message));

  }

export const getBusinessIdByEmail = (email) => (dispatch) => {
  axios(`https://plankton-app-jy8jr.ondigitalocean.app/api/users?populate=*&filters[email][$contains]=${email}`)
    .then((res) => dispatch(getIdBusiness(res.data[0].business.id)))
    .catch((error) => console.log(error));
};

export const getBusinessData = (id) => (dispatch) => {
  axios(`https://plankton-app-jy8jr.ondigitalocean.app/api/businesses/${id}?populate=*`)
    .then((res) => dispatch(getiInfoBusiness(res.data.data)))
    .catch((error) => console.log(error));

};