import axios from "axios";
import { getAllCategories } from "../../reducers/categoriesSlice";

export const getCategories = () => (dispatch) => {
  axios(`http://localhost:1336/api/categories`).then((resp) =>dispatch(getAllCategories(resp.data.data)));
};
