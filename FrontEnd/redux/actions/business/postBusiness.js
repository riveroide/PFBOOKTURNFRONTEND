import axios from "axios";

export const postBusiness = (data) => () => {
<<<<<<< HEAD
  axios.post(`http://localhost:1337/api/businesses`, {data: data}).catch((error) => console.log(error));



=======
  axios.post(`https://plankton-app-jy8jr.ondigitalocean.app/api/businesses`, {data: data}).catch((error) => error);
>>>>>>> 1d2f85522ba618a61e7b4e6f250e64e8e81870ae
};

