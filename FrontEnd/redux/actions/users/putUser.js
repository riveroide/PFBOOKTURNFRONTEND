import axios from "axios";

export const putUser = (id, data) => () => {
    axios.put(`https://plankton-app-jy8jr.ondigitalocean.app/api/users/${id}`, data)
    .then(r => console.log(r.data))
    .catch(error => console.log(error))
};