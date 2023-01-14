import axios from "axios";

export const putUser = (id, data) => () => {
    axios.put(`${process.env.PATH_BACKEND}/api/users/${id}`, data)
    .then(r => console.log(r.data))
    .catch(error => console.log(error))
};