import axios from "axios";

export const postUser = (data) => async() => {
    await axios.post(`https://plankton-app-jy8jr.ondigitalocean.app/api/users`, {...data})
    .then(r => console.log(r.data))
    .catch(error => console.log(error))
};


export async function signIn({ email, password }) {
  const res = await axios.post(`https://plankton-app-jy8jr.ondigitalocean.app/api/auth/local`, {
    identifier: email,
    password,
  });
  return res.data;
}