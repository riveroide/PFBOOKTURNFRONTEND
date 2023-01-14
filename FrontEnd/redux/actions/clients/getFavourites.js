import axios from 'axios';
import { getFavouritesList } from "redux/reducers/clientsSlice";

export const getFavourites = (id) => (dispatch) => {
    axios(`http://localhost:1336/api/favourite-lists/${id}?populate=*`)
        .then((res) => dispatch(getFavouritesList(res.data.data)))
        .catch((error) => console.log(error));
} 