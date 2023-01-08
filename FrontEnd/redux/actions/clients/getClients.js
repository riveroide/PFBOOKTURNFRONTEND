import axios from "axios";
import { getAllClients, getClientId } from "redux/reducers/clientsSlice";

export const getClients = () => (dispatch) => {
  axios("http://localhost:1337/api/clients")
    .then((res) => dispatch(getAllClients(res.data.data)))
    .catch((error) => console.log(error));
};

export const getClient = (id) => (dispatch) => {
  axios(`http://localhost:1337/api/clients/${id}`)
    .then((res) => dispatch(getClientId(res.data.data)))
    .catch((error) => console.log(error));
};
