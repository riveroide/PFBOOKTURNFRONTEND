import axios from "axios";

export const postEmailNotif = (data) => () =>{
    axios.post("https://pfbookturnfrontend.vercel.app/api/hello", data).catch((error)=>console.log(error))
}