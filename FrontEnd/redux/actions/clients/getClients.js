import axios from "axios";
import { getAllClients, getClientId } from "redux/reducers/clientsSlice";

export const getClients = () => (dispatch) => {
  axios("http://localhost:3001/clients")
    .then((res) => dispatch(getAllClients(res.data)))
    .catch((error) => console.log(error));
};

export const getClient = (id) => (dispatch) => {
  axios(`http://localhost:3001/clients/${id}`)
    .then((res) => dispatch(getClientId(res.data)))
    .catch((error) => console.log(error));
};
