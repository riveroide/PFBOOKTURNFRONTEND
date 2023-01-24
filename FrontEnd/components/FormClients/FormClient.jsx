import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserByEmail } from "../../redux/actions/users/getUsers";
import { postClient } from "../../redux/actions/clients/postClient"
import { useState } from "react";
import { useRouter } from "next/router";
import swal from 'sweetalert'

const FormClient = ({ emailuser }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { userInfo } = useSelector((state) => state.users);
  const [error, setError] = useState({})
  const [clientinfo, setclientinfo] = useState({
    nameComplete: "",
    telephone:"",
    user: "",
  });
  console.log(emailuser, "LO QUE ROMPE")

  function validate (userinfo){
    let error = {}
  if (!clientinfo.nameComplete){
    error.nameComplete="Nombre Completo requerido"
  }
  if(!clientinfo.telephone){
    error.telephone="Tu número de teléfono es requerido"
  }

return error
}

  useEffect(() => {
    dispatch(getUserByEmail(emailuser));
    console.log(emailuser,"en el useeffect")
  }, [emailuser]);
  

  function handleChange(e) {
    setclientinfo({
      ...clientinfo,
      [e.target.name]: e.target.value,
      user: userInfo[0]?.id
    });
    setError(validate({
      ...clientinfo,
      [e.target.name]:e.target.value
    }))
  }
  function handleSubmit (){
    dispatch(postClient(clientinfo))
    swal({
      title:'Listo!',
      text: 'Su cuenta fue creada correctamente',
      icon: 'success',
      timer: 3000,
      stopKeydownPropagation: true,
    });
   router.push("/client/login")
  }
  console.log(clientinfo)
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="font-cool_g text-3xl mb-12">Precisamos saber más de usted...</h2>
      <div>
      <label
          className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <span className="text-xs font-medium text-gray-700">
            {" "}
            Nombre Completo{" "}
          </span>

          <input
            type="text"
            name="nameComplete"
            placeholder="Su Nombre Completo"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            value={clientinfo.nameComplete}
            onChange={(e) => handleChange(e)}
          />
           {error.nameComplete &&(<p className="text-xs text-red-600">{error.nameComplete}</p>)}
        </label>

        <label
          className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <span className="text-xs font-medium text-gray-700">
            {" "}
            Teléfono{" "}
          </span>

          <input
            type="text"
            name="telephone"
            placeholder="Su Numero de Teléfono"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            value={clientinfo.telephone}
            onChange={(e) => handleChange(e)}
          />
          {error.telephone &&(<p className="text-xs text-red-600">{error.telephone}</p>)}
        </label>
      </div>

      <div className="mt-12">
      <button 
      className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"type='submit' onClick={()=>{
                handleSubmit()
            }}>FINALIZAR</button>
      </div>
      
    </div>
  );
};

export default FormClient;
