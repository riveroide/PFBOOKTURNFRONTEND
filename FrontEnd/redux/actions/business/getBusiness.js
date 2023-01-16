import { getAllBusiness, getBusinessId, getBusinessEmail } from "redux/reducers/businessSlice";
import axios from "axios";

export const getBusiness = () => (dispatch) => {
  axios(`http://localhost:1337/api/businesses?populate=*`)
    .then((res) => {
      dispatch(getAllBusiness(res.data.data));
    })
    .catch((error) => console.log(error));
};

export const getBusinessById = (id) => (dispatch) => {
  axios(`http://localhost:1337/api/businesses/${id}?populate=*`)
    .then((res) => {
      dispatch(getBusinessId(res.data));
    })
    .catch((error) => console.log(error));
};

export const getBusinessByName = (name) => (dispatch) => {
  axios(
    "http://localhost:1337/api/businesses?populate=*&filters[name][$containsi]=" +
      name
  ).then((res) => {
    if (!res.data.data.length) return alert("No se encontraron resultados")
    dispatch(getAllBusiness(res.data.data));
  }).catch((error) => console.log(error))
};

export const getBusinessByEmail = (email) => (dispatch) => {
  axios(`http://localhost:1337/api/businesses?populate=*&filters[email][$containsi]=` +
  email)
    .then((res) => {
      dispatch(getBusinessEmail(res.data.data));
    })
    .catch((error) => console.log(error.message));
};