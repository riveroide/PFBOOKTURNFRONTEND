import axios from "axios";

export const postUser = (data) => () => {
    axios.post(`https://plankton-app-jy8jr.ondigitalocean.app/api/users`, {...data})
    .then(r => console.log(r.data))
    .catch(error => console.log(error))
};