import { getAllBusiness, getBusinessId } from "redux/reducers/businessSlice";
import axios from "axios";

export const getBusiness = () => (dispatch: any) => {
  axios("http://localhost:3000/business")
    .then((res) => {
      dispatch(getAllBusiness(res.data));
    })
    .catch((error) => console.log(error));
};

export const getBusinessById = (id:any) => (dispatch:any) => {
  axios(`http://localhost:3000/business/${id}`)
  .then(res => {
      dispatch(getBusinessId(res.data))
  })
  .catch(error => console.log(error))
}
