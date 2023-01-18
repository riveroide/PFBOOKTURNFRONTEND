import axios from 'axios';
import { getFavouritesList } from "redux/reducers/clientsSlice";

export const getFavourites = (id) => (dispatch) => {
    axios(`https://plankton-app-jy8jr.ondigitalocean.app/api/favourite-lists?populate=*&filters[clients][id][$eq]=${id}`)
        .then((res) => {
            dispatch(getFavouritesList(res.data.data))
        })

        .catch((error) => console.log(error));
} 
