import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postUser } from '../../redux/actions/users/postUser'

const FormUser = ({setformstep,formstep, setidclient}) => {
    const dispatch = useDispatch()
    const [userinfo, setuserinfo] = useState({
        role: 2,
        username: "",
        email: "",
        password: ""
    })

    function handleChange(e){
        e.preventDefault()
        setuserinfo({
            ...userinfo,
            [e.target.name]: e.target.value
        })
        setidclient(userinfo.email)
    }

     function handleSubmit (e){
         dispatch(postUser(userinfo))
        alert("usuario creado")
        

    }
    console.log(userinfo)
  return (
    <div className='flex flex-col justify-center items-center'>
        <h2>FORMULARIO CREACION USER</h2>
            <div>
                <h4>Nombre y Apellido</h4>
                <input type="text" name='username' placeholder='Nombre Ejemplo' value={userinfo.username} onChange={(e)=> handleChange(e)}></input>
            </div>
            <div>
                <h4>Email</h4>
                <input type="text" name='email' placeholder='Email' value={userinfo.email} onChange={(e)=> handleChange(e)}></input>
            </div>
            <div>
                <h4>Contraseña</h4>
                <input type="password" name='password' placeholder='********' value={userinfo.password} onChange={(e)=> handleChange(e)}></input>
            </div>
            <button type='submit' onClick={()=>{
                handleSubmit()
                setformstep(formstep + 1)}}>ENVIAR</button>
    </div>
  )
}

export default FormUser

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
