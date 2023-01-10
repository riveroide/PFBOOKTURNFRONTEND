import axios from "axios";
import { getAllCategories } from "../../reducers/categoriesSlice";

export const getCategories = () => (dispatch) => {
  axios("http://bookturn-deploy-cthq4.ondigitalocean.app/api/categories").then((resp) =>dispatch(getAllCategories(resp.data.data)));
};
