import axios from "axios"

export const putBusiness = (id:any, data:any) => () => {
    axios.put(`http://localhost:3000/business/${id}`, data)
}