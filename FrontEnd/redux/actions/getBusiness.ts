import { getAllBusiness } from "redux/reducers/businessSlice";

export const getBusiness = () => (dispatch:any) => {
    fetch("http://localhost:3000/business")
    .then(res => res.json())
    .then(res => dispatch(getAllBusiness(res)))
}
