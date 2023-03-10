import axios from "axios";
import { getAllUsers , getUserEmail } from "redux/reducers/usersSlice";

export const getUsers = () => (dispatch) => {
    axios(`https://plankton-app-jy8jr.ondigitalocean.app/api/users`)
    .then(r => dispatch(getAllUsers(r.data)))
    .catch(error => console.log(error))
};

export const getUserByEmail = (email) => async (dispatch) => {
    await axios(`https://plankton-app-jy8jr.ondigitalocean.app/api/users?populate=*&filters[email][$containsi]=` +
    email)
      .then((res) => {
        dispatch(getUserEmail(res.data));
      })
      .catch((error) => console.log(error.message));
    }