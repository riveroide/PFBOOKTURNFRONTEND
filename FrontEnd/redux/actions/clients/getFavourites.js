import axios from "axios";
import {
  getFavouritesList,
  getOneFavourite,
} from "redux/reducers/clientsSlice";

export const getFavourites = (id) => async(dispatch) => {
  await axios(
    `https://plankton-app-jy8jr.ondigitalocean.app/api/favourite-lists?populate=*&filters[clients][id][$eq]=${id}`
  )
    .then((res) => {
      dispatch(getFavouritesList(res.data.data));
    })

    .catch((error) => console.log(error));
};

export const getFavouriteBusinessAndClient =
  (clientId, businessId) => (dispatch) => {
    axios(
      `https://plankton-app-jy8jr.ondigitalocean.app/api/favourite-lists?filters[clients][id][$eq]=${clientId}&filters[businesses][id][$eq]=${businessId}`
    )
      .then((res) => dispatch(getOneFavourite(res.data.data)))
      .catch((error) => console.log(error));
  };
