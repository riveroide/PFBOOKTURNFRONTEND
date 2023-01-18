import axios from "axios";
import { getAllClients, getClientId, getClientEmail } from "redux/reducers/clientsSlice";

export const getClients = () => (dispatch) => {
  axios("https://plankton-app-jy8jr.ondigitalocean.app/api/clients?populate=*")
    .then((res) => dispatch(getAllClients(res.data.data)))
    .catch((error) => console.log(error));
};

export const getClient = (id) => (dispatch) => {
  axios(`https://plankton-app-jy8jr.ondigitalocean.app/api/clients/${id}?populate=*`)
    .then((res) => dispatch(getClientId(res.data.data)))
    .catch((error) => console.log(error));
};

export const getClientByEmail = (email) => (dispatch) => {
  axios(`https://plankton-app-jy8jr.ondigitalocean.app/api/users?populate=*&filters[email][$contains]=${email}`)
    .then((res) => {dispatch(getClientEmail(res.data[0].client))
    console.log(res.data)})

    .catch((error) => console.log(error));
}
