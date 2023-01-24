import axios from "axios";

export const postEmailNotif = (data) => () =>{
    axios.post("http://localhost:3000/api/hello", data).catch((error)=>console.log(error))
}