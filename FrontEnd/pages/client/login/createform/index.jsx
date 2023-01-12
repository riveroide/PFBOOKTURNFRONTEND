import React from "react";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { postClient } from "redux/actions/clients/postClient.js";
import * as yup from "yup";

//----material ui
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//------

const Createform = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isRequired = "Campo obligatorio";

  const validationSchema = yup.object({
    name: yup.string().required(isRequired),
    lastName: yup.string().required(isRequired),
    email: yup.string().required(isRequired).email("Debe ser un email valido"),
    user: yup
      .string()
      .required(isRequired)
      .min(6, "Debe ser de minimo 6 caracteres"),
    password: yup
      .string()
      .required(isRequired)
      .min(8, "Debe ser de minimo 8 caracteres"),
  });

  const renderError = (message) => <p className="mt-2 text-sm text-red-600 dark:text-red-500">{message}</p>;
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <Formik
        initialValues={{
          totalRates: 0,
          totalRated: 0,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          console.log("formulario enviado");
          dispatch(postClient(values));
          alert("cliente registrado con éxito");
          router.push("/");
        }}
      >
        {({ handleChange, handleBlur }) => {
          return (

            <>
            

              <Box className="overflow-hidden flex flex-col items-center"
                sx={{
                  width: 430,
                  height: 580,
                  backgroundColor: "primary.light",
                  borderRadius: 2,
                }}
              >
                <h1 className="pt-2">Crea tu usuario</h1>
                {/* Box de material ui y tailwind(nombre) */}
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                    color: "black",
                  }}
                  noValidate
                  autoComplete="off"
                >

               <div className="relative z-0 w-full mb-6 group" style={{"width":"14rem", "height":"4.5rem"}}>
               <Field 
               type="text" 
               name="name" 
               id="name" 
               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
               placeholder=" " 
               />
               <label 
               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                Nombre
              </label>
              <ErrorMessage name="name" render={renderError}/>
               </div>

                </Box>

                {/* Box de material ui y tailwind (Apellido) */}
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                    color: "black",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div className="relative z-0 w-full mb-6 group" style={{"width":"14rem", "height":"4.5rem"}}>
               <Field 
               type="text" 
               name="lastName" 
               id="lastName" 
               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
               placeholder=" " 
               />
               <label 
               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                Apellido
                </label>
                <ErrorMessage name="lastName" render={renderError} />
               </div>                 
                </Box>

                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                    color: "black",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div className="relative z-0 w-full mb-6 group" style={{"width":"14rem", "height":"4.5rem"}}>
               <Field 
               type="text" 
               name="email" 
               id="email" 
               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
               placeholder=" " 
               />
               <label  
               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                Email
                </label>
                <ErrorMessage name="email" render={renderError} />
               </div>
                </Box>

                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                    color: "black",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div className="relative z-0 w-full mb-6 group" style={{"width":"14rem", "height":"4.5rem"}}>
               <Field 
               type="text" 
               name="user" 
               id="user" 
               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
               placeholder=" " 
               />
               <label  
               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                Usuario
                </label>
                <ErrorMessage name="user" render={renderError} />
               </div>
               
                </Box>


                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                    color: "black",
                  }}
                  noValidate
                  autoComplete="off"
                >
                   <div className="relative z-0 w-full mb-6 group" style={{"width":"14rem", "height":"4.5rem"}}>
               <Field 
               type="password" 
               name="password" 
               id="password" 
               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
               placeholder=" " 
               />
               <label 
               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                Contraseña
              </label>
              <ErrorMessage name="password" render={renderError} />
               </div>
      
                </Box>

               <div
                className="overflow-hidden flex flex-col items-center place-content-around"
               style={{"height":"5rem"}}
               >
               <Stack pacing={2} direction="row">
                  <Button type="submit" variant="contained">Registrarse</Button>
                </Stack>

                <Link href="/client/login">
                  <button>Volver al login</button>
                </Link>
               </div>

              </Box>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default Createform;
