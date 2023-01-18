import axios from "axios";
import {
  filterByOrder,
  filterByCategory,
} from "../../reducers/businessSlice";

export const filterOrder = (payload) => (dispatch) => {
  dispatch(filterByOrder(payload));
};

export const filterCategory = (name) => (dispatch) => {

  axios(
    `https://plankton-app-jy8jr.ondigitalocean.app/api/businesses?populate=*&filters[categories][name][$containsi]=${name}`
  ).then((res) => {
    console.log(process.env.STRIPE_SECRET_KEY)
    dispatch(filterByCategory(res.data.data));
  });
};