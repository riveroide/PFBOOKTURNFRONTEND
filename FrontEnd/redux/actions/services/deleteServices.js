import axios from "axios";

export const deleteService = (id) => async()=>{
    await axios.delete(`https://plankton-app-jy8jr.ondigitalocean.app/api/services/${id}`)

    .catch(error => console.log(error))
};