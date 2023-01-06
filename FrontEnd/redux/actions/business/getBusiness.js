import { getAllBusiness, getBusinessId } from "redux/reducers/businessSlice";
import axios from "axios";

export const getBusiness = () => (dispatch) => {
  axios("http://localhost:3001/business")
    .then((res) => {
      //console.log(res.data, "asdasdasda")
      dispatch(getAllBusiness(res.data));
    })
    .catch((error) => console.log(error));
};

export const getBusinessById = (id) => (dispatch) => {
  axios(`http://localhost:3001/business/${id}`)
  .then(res => {
      dispatch(getBusinessId(res.data))
  })
  .catch(error => console.log(error))
}
