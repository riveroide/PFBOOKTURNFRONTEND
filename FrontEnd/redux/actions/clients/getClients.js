import axios from "axios";
import { getAllClients, getClientId } from "redux/reducers/clientsSlice";

export const getClients = () => (dispatch) => {
  axios("http://bookturn-deploy-cthq4.ondigitalocean.app/api/clients")
    .then((res) => dispatch(getAllClients(res.data.data)))
    .catch((error) => console.log(error));
};

export const getClient = (id) => (dispatch) => {
  axios(`http://bookturn-deploy-cthq4.ondigitalocean.app/api/clients/${id}`)
    .then((res) => dispatch(getClientId(res.data.data)))
    .catch((error) => console.log(error));
};
