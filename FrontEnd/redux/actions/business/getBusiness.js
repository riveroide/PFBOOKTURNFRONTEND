import { getAllBusiness, getBusinessId } from "redux/reducers/businessSlice";
import axios from "axios";

export const getBusiness = () => (dispatch) => {
  axios("http://localhost:1337/api/businesses?populate=*")
    .then((res) => {
      dispatch(getAllBusiness(res.data.data));
    })
    .catch((error) => console.log(error));
};

export const getBusinessById = (id) => (dispatch) => {
  axios(`http://localhost:3001/business/${id}`)
    .then((res) => {
      dispatch(getBusinessId(res.data));
    })
    .catch((error) => console.log(error));
};

export const getBusinessByName = (name) => (dispatch) => {
  axios("http://localhost:1337/api/businesses?filters[name][$containsi]=" + name)
  .then((res) => {
    dispatch(getAllBusiness(res.data.data))
  })

};
