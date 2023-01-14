import axios from "axios";
import { getAllCategories } from "../../reducers/categoriesSlice";

export const getCategories = () => (dispatch) => {
  axios(`${process.env.PATH_BACKEND}/api/categories`).then((resp) =>dispatch(getAllCategories(resp.data.data)));
};
