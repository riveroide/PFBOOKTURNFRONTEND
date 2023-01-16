import axios from 'axios';
import { getFavouritesList } from "redux/reducers/clientsSlice";

export const getFavourites = (id) => (dispatch) => {
    axios(`http://localhost:1337/api/favourite-lists?populate=*&filters[clients][id][$eq]=${id}`)
        .then((res) => {
            dispatch(getFavouritesList(res.data.data))
        })

        .catch((error) => console.log(error));
} 
