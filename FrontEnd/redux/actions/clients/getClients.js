import axios from "axios";
import { getAllClients, getClientId, getClientEmail } from "redux/reducers/clientsSlice";

export const getClients = () => (dispatch) => {
  axios("http://localhost:1336/api/clients?populate=*")
    .then((res) => dispatch(getAllClients(res.data.data)))
    .catch((error) => console.log(error));
};

export const getClient = (id) => (dispatch) => {
  axios(`${process.env.PATH_BACKEND}/api/clients/${id}?populate=*`)
    .then((res) => dispatch(getClientId(res.data.data)))
    .catch((error) => console.log(error));
};

export const getClientByEmail = (email) => (dispatch) => {
  axios(`${process.env.PATH_BACKEND}/api/users?populate=*&filters[email][$contains]=${email}`)
    .then((res) => dispatch(getClientEmail(res.data[0].client.id)))
    .catch((error) => console.log(error));
}
