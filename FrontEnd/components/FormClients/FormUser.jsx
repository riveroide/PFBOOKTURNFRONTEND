import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postUser } from "../../redux/actions/users/postUser";

const FormUser = ({ setformstep, formstep, setemailuser }) => {
  const dispatch = useDispatch();
  const [userinfo, setuserinfo] = useState({
    role: 2,
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    
    setuserinfo({
      ...userinfo,
      [e.target.name]: e.target.value,
    });
    setemailuser(userinfo.email);
  }

  function handleSubmit(e) {
    dispatch(postUser(userinfo));
    alert("usuario creado");
  }
  console.log(userinfo);
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
            name="password"
            placeholder="*********"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            value={userinfo.password}
            onChange={(e) => handleChange(e)}
          />
        </label>
      </div>
      <div className="mt-12">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
        onClick={() => {
          handleSubmit();
          setformstep(formstep + 1);
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
