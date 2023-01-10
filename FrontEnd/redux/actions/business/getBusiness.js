import { getAllBusiness, getBusinessId } from "redux/reducers/businessSlice";
import axios from "axios";

export const getBusiness = () => (dispatch) => {
  axios("http://bookturn-deploy-cthq4.ondigitalocean.app/api/businesses?populate=*")
    .then((res) => {
      dispatch(getAllBusiness(res.data.data));
    })
    .catch((error) => console.log(error));
};

export const getBusinessById = (id) => (dispatch) => {
  axios(`http://bookturn-deploy-cthq4.ondigitalocean.app/api/businesses/${id}?populate=*`)
    .then((res) => {
      dispatch(getBusinessId(res.data));
    })
    .catch((error) => console.log(error));
};

export const getBusinessByName = (name) => (dispatch) => {
  axios(
    "http://bookturn-deploy-cthq4.ondigitalocean.app/api/businesses?populate=*&filters[name][$containsi]=" +
      name
  ).then((res) => {
    dispatch(getAllBusiness(res.data.data));
  });
};
