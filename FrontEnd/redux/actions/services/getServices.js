import axios from "axios";
import { getAllServices, getServiceById, getServiceByName } from "redux/reducers/servicesSlice";

export const getServices = () => (dispatch) => {
  axios("https://plankton-app-jy8jr.ondigitalocean.app/api/services")
    .then((res) => dispatch(getAllServices(res.data)))
    .catch((error) => console.log(error));
};

export const getServiceId = (id) => (dispatch) => {
  axios(`https://plankton-app-jy8jr.ondigitalocean.app/api/services/${id}`)
    .then((res) => dispatch(getServiceById(res.data)))
    .catch((error) => console.log(error));
};

export const getServiceName = (name) => (dispatch) => {
    axios(`https://plankton-app-jy8jr.ondigitalocean.app/api/services?name=${name}`)
      .then((res) => dispatch(getServiceByName(res.data)))
      .catch((error) => console.log(error));
  };

// 