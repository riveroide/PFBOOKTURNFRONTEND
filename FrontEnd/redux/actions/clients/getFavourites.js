import axios from 'axios';
import { getFavouritesList } from "redux/reducers/clientsSlice";

export const getFavourites = (id) => (dispatch) => {
    axios(`${process.env.PATH_BACKEND}/api/favourite-lists/${id}?populate=*`)
        .then((res) => dispatch(getFavouritesList(res.data.data)))
        .catch((error) => console.log(error));
} 