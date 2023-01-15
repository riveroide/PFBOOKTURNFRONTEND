import axios from "axios";

export const postUser = (data) => () => {
    console.log("soy data", data)
    axios.post(`http://localhost:1337/api/users`, {...data})
    .then(r => console.log(r.data))
    .catch(error => console.log(error))
};