import axios from "axios";
import { getAllClients, getClientId } from "redux/reducers/clientsSlice";

export const getClients = () => (dispatch: any) => {
  axios("http://localhost:3000/clients")
    .then((res) => dispatch(getAllClients(res.data)))
    .catch((error) => console.log(error));
};

export const getClient = (id: any) => (dispatch: any) => {
  axios(`http://localhost:3000/clients/${id}`)
    .then((res) => dispatch(getClientId(res.data)))
    .catch((error) => console.log(error));
};
