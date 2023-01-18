import axios from "axios";
import { getRatingByClientAndBusiness } from "../../reducers/ratingsSlice"

export const getRatingFromClientAndBusiness = (clientId, businessId) => (dispatch) => {
    axios(`http://localhost:1337/api/ratings?filters[business][id][$eq]=${businessId}&filters[client][id][$eq]=${clientId}`).then((res) => dispatch(getRatingByClientAndBusiness(res.data.data)))
}