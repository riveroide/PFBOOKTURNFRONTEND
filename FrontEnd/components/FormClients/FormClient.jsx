import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserByEmail } from "../../redux/actions/users/getUsers";
import { postClient } from "../../redux/actions/clients/postClient"
import { useState } from "react";
import { useRouter } from "next/router";

const FormClient = ({ emailuser }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { userInfo } = useSelector((state) => state.users);
  const [clientinfo, setclientinfo] = useState({
    nameComplete: "",
    user: userInfo[0].id,
  });

  useEffect(() => {
    dispatch(getUserByEmail(emailuser));
  }, []);
  console.log(userInfo[0].id, "userinfoid");

  function handleChange(e) {
    e.preventDefault();
    setclientinfo({
      ...clientinfo,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit (){
    dispatch(postClient(clientinfo))
   alert("cliente creado")
   router.push("/client/login")
  }
  console.log(clientinfo)
  return (
    <div className="flex flex-col justify-center items-center">
      <h2>FORMULARIO CREACION CLIENTE</h2>
      <div>
        <h4>Nombre y Apellido Completo</h4>
        <input
          type="text"
          name="nameComplete"
          placeholder="Nombre Apellido"
          value={clientinfo.nameComplete}
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <button type='submit' onClick={()=>{
                handleSubmit()
            }}>FINALIZAR</button>
    </div>
  );
};

export default FormClient;
