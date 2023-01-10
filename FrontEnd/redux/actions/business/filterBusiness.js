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
    `http://bookturn-deploy-cthq4.ondigitalocean.app/api/businesses?populate=*&filters[categories][name][$containsi]=${name}`
  ).then((res) => {
    dispatch(filterByCategory(res.data.data));
  });
};