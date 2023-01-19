import axios from "axios";
import { getAllCategories } from "../../reducers/categoriesSlice";

export const getCategories = () => (dispatch) => {
  axios(`https://plankton-app-jy8jr.ondigitalocean.app/api/categories`).then((resp) =>dispatch(getAllCategories(resp.data.data)));
};
