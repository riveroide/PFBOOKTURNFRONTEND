import axios from "axios";

export const putUser = (id, data) => () => {
    axios.put(`http://localhost:1337/api/users/${id}`, data)
    .then(r => console.log(r.data))
    .catch(error => console.log(error))
};