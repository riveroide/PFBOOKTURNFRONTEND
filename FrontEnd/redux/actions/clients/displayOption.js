import {setDisplayOption} from "redux/reducers/clientsSlice";

export const display = (option) => (dispatch) => {
    dispatch(setDisplayOption(option))
}