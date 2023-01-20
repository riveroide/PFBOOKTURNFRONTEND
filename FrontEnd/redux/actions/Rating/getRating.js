import axios from "axios";
import {
  getRatingByClientAndBusiness,
  getAllRatings,
} from "../../reducers/ratingsSlice";

export const getRatingFromClientAndBusiness =
  (clientId, businessId) => (dispatch) => {
    axios(
      `https://plankton-app-jy8jr.ondigitalocean.app/api/ratings?filters[business][id][$eq]=${businessId}&filters[client][id][$eq]=${clientId}`
    ).then((res) => dispatch(getRatingByClientAndBusiness(res.data.data)));
  };

export const getRatingBusiness = (id) => (dispatch) => {
  axios(
    `https://plankton-app-jy8jr.ondigitalocean.app/api/ratings?filters[business][id][$eq]=${id}`
  )
    .then((res) => dispatch(getAllRatings(res.data.data)))
    .catch((res) => console.log(res));
};
