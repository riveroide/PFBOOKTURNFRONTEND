import axios from "axios";
import { getAllUsers } from "redux/reducers/usersSlice";

export const getUsers = () => (dispatch) => {
    axios(`${process.env.PATH_BACKEND}/api/users`)
    .then(r => dispatch(getAllUsers(r.data)))
    .catch(error => console.log(error))
};

