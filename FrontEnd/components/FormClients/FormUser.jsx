import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postUser } from "../../redux/actions/users/postUser";
import swal from 'sweetalert2'


const FormUser = ({ setformstep, formstep, setemailuser }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState({})
  const [passwordval, setPasswordval] = useState()
  const [userinfo, setuserinfo] = useState({
    role: 2,
    username: "",
    email: "",
    password: "",
  });

  function validate (userinfo){
    let error = {}
  if (!userinfo.username){
    error.username="Nombre de usuario requerido"
  }
  if(!userinfo.email){
    error.email="Email es requerido"
  }
  if(userinfo.password.length < 6){
    error.password = "La contraseña tiene que tener mínimo 6 carácteres"
  }
  if(passwordval !== userinfo.password){
    error.password= "Las contraseñas no coinciden"
  }
return error
}


  function handleChange(e) {
    setuserinfo({
      ...userinfo,
      [e.target.name]: e.target.value,
    });
    
    setError(validate({
      ...userinfo,
      [e.target.name]:e.target.value
    }))
    setemailuser(userinfo.email);
  }
 
  async function handleSubmit(e) {
      dispatch(postUser(userinfo));
      await swal.fire({
        title:'Usuario Creado!',
        text: 'Su usuario fue creado satisfactoriamente ',
        icon: 'success',
        timer: 2500,
        stopKeydownPropagation: true,
      });
      setformstep(formstep + 1);
  }
  console.log(userinfo);
  console.log(error, "validacion")
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-cool_g text-3xl mb-12">Primero, creá tu usuario en BookTurn</h1>
      <div>
        <label
          className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <span className="text-xs font-medium text-gray-700">
            {" "}
            Nombre de Usuario{" "}
          </span>

          <input
            type="text"
            name="username"
            placeholder="Tu Usuario"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            value={userinfo.username}
            onChange={(e) => handleChange(e)}
          />
          {error.username &&(<p className="text-xs text-red-600">{error.username}</p>)}
        </label>

        <label
          
          className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <span className="text-xs font-medium text-gray-700"> Email </span>

          <input
            type="email"
            name="email"
            placeholder="email@ejemplo.com"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            value={userinfo.email}
            onChange={(e) => handleChange(e)}
          />
          {error.email &&(<p className="text-xs text-red-600">{error.email}</p>)}
        </label>

        <label
          
          className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <span className="text-xs font-medium text-gray-700">
            {" "}
            Contraseña{" "}
          </span>

          <input
            type="password"
            name="passwordval"
            placeholder="*********"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            value={passwordval}
            onChange={(e)=>{
              setPasswordval(e.target.value)
            }}
          />
          {error.passwordval &&(<p className="text-xs text-red-600 tracking-widest">{error.passwordval}</p>)}
        </label>

        <label
          
          className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <span className="text-xs font-medium text-gray-700">
            {" "}
            Repetir Contraseña{" "}
          </span>

          <input
            type="password"
            name="password"
            placeholder="*********"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            value={userinfo.password}
            onChange={(e) => handleChange(e)}
          />
          {error.password &&(<p className="text-xs text-red-600">{error.password}</p>)}
        </label>
        
      </div>
      <div className="mt-12">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
        onClick={() => {
          handleSubmit();
          
        }}
      >
        Siguiente
      </button>
      </div>
      
    </div>
  );
};

export default FormUser;

// import React, { useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";

// import * as yup from "yup";
// import { useDispatch } from "react-redux";
// import { postUser } from "../../redux/actions/users/postUser";

// const FormUser = ({setformstep,formstep}) => {
//   const dispatch = useDispatch();
//   const isRequired = "Campo obligatorio";
//   const validationSchema = yup.object({
//     username: yup.string().required(isRequired),
//     email: yup.string().required(isRequired).email("Debe ser un email valido"),
//     password: yup
//       .string()
//       .required(isRequired)
//       .min(6, "Debe ser de minimo 6 caracteres"),
//   });

//   const renderError = (message) => (
//     <p className="help is-danger text-red-600">{message}</p>
//   );
//   return (<div className="flex flex-col w-screen h-screen justify-center items-center ">
//       <Formik
//         initialValues={{
//           role: 2,
//           username: "",
//           email: "",
//           password: "",

//         }}
//         validationSchema={validationSchema}
//         onSubmit={(values) => {
//           console.log(values);
//           dispatch(postUser(values))

//           router.push("/client/login");
//           alert("cliente registrado con éxito");

//         }}
//       >
//         <Form className="w-1/4 p-4 bg-gray-200 shadow-md rounded-lg items-center justify-center flex flex-col">
//           <h1>FORMULARIO DE CREACION DE USER</h1>
//           <div>
//             <h3 className="">Ingresa usuario</h3>
//             <Field
//               className="text-center text-blue-800"
//               name="username"
//               type="text"
//             />
//             <ErrorMessage name="username" render={renderError} />
//           </div>

//           <h3>Ingresa email</h3>
//           <Field name="email" type="email" />
//           <ErrorMessage name="email" render={renderError} />
//           <h3>Ingresa contraseña</h3>
//           <Field name="password" type="password" />
//           <ErrorMessage name="password" render={renderError} />
//           <button type="submit" onClick={()=>{setformstep(formstep+1)}
//             }>Continuar</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default FormUser;
