import axios from "axios";
import {
  getRatingByClientAndBusiness,
  getAllRatings,
 getRatings
} from "../../reducers/ratingsSlice";

export const getRatingFromClientAndBusiness =
  (clientId, businessId) => (dispatch) => {
    axios(
      `https://plankton-app-jy8jr.ondigitalocean.app/api/ratings?filters[business][id][$eq]=${businessId}&filters[client][id][$eq]=${clientId}`
    ).then((res) => dispatch(getRatingByClientAndBusiness(res.data.data)));
  };

export const getRatingBusiness = (id) => (dispatch) => {
  axios(
    `https://plankton-app-jy8jr.ondigitalocean.app/api/ratings?filters[business][id][$eq]=${id}&sort[0]=createdAt%3Adesc`
  )
    .then((res) => dispatch(getAllRatings(res.data.data)))
    .catch((res) => console.log(res));
};

export const getRatingsAll = () => (dispatch) => {
  axios(
    "https://plankton-app-jy8jr.ondigitalocean.app/api/ratings?"
  )
  .then((res) => dispatch(getRatings(res.data.data)))
    .catch((res) => console.log(res));
}