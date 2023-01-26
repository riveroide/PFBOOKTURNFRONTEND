import axios from 'axios';
import { getBookedList } from "redux/reducers/clientsSlice";

export const getBooked = (id) => async(dispatch) => {
    await axios(`https://plankton-app-jy8jr.ondigitalocean.app/api/bookings?populate=*&filters[client][id][$eq]=${id}`)
        .then((res) => {
            dispatch(getBookedList(res.data.data))
        })

        .catch((error) => console.log(error));
} 