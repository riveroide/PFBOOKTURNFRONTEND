import axios from "axios";
import { getAllServices, getServiceById, getServiceByName } from "redux/reducers/servicesSlice";

export const getServices = () => (dispatch) => {
  axios("http://localhost:1336/services")
    .then((res) => dispatch(getAllServices(res.data)))
    .catch((error) => console.log(error));
};

export const getServiceId = (id) => (dispatch) => {
  axios(`${process.env.PATH_BACKEND}/services/${id}`)
    .then((res) => dispatch(getServiceById(res.data)))
    .catch((error) => console.log(error));
};

export const getServiceName = (name) => (dispatch) => {
    axios(`${process.env.PATH_BACKEND}/services?name=${name}`)
      .then((res) => dispatch(getServiceByName(res.data)))
      .catch((error) => console.log(error));
  };