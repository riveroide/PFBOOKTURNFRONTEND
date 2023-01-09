import React from "react";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { postClient } from "redux/actions/clients/postClient.js";
import * as yup from "yup";

//----material ui
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
//------

const createform = () => {
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

  const renderError = (message) => <p>{message}</p>;
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
        {({ handleChange, handleBlur }) => (

          
          <>
           <Link href="/client/login">
              <button>Volver al login</button>
            </Link>
          
          <Box className="overflow-hidden flex flex-col justify-center items-center"
            sx={{
              width: 300,
              height: 400,
              backgroundColor: "primary.light",
              borderRadius: 2,
            }}
          >
           

          
            {/* Box de material ui (nombre) */}
            <Box
              component="form"
              sx={{
      
                "& > :not(style)": { m: 1, width: "25ch" },
                color: "black",
            
              }}
              noValidate
              autoComplete="off"
            >
              <TextField className="bg-slate-400 rounded-md"

                type="text"
                name="name"
                placeholder="Tu Nombre"
                id="name"
                label="Nombre"
              />

              <ErrorMessage name="name" render={renderError} />
              {/* NO SE MUESTRA */}
            </Box>

            <div>
              {/* <label>Nombre:</label> */}
              {/* <Field
                type="text"
                id="name"
                name="name"
                placeholder="Tu Nombre"
              /> */}
              <ErrorMessage name="name" render={renderError} />
            </div>

              {/* Box de material ui (Apellido) */}
            <Box 
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
                color: "black",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                type="text"
                name="lastName"
                placeholder="Tu Apellido"
                id="lastName"
                label="Apellido"
              />

              <ErrorMessage name="lastName" render={renderError} />
              {/* NO SE MUESTRA */}
            </Box>

            <div>
              {/* <label>Apellido:</label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Tu Apellido"
              /> */}

              <ErrorMessage name="lastName" render={renderError} />
            </div>

               {/* Box de material ui (Email) */}
            <Box 
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
                color: "black",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                type="text"
                name="email"
                placeholder="email@example.com"
                id="email"
                label="Email"
              />

              <ErrorMessage name="email" render={renderError} />
              {/* NO SE MUESTRA */}
            </Box>

            <div>
              {/* <label>Email:</label>
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="email@example.com"
              /> */}
              <ErrorMessage name="email" render={renderError} />
            </div>

            <Box 
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
                color: "black",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                type="text"
                name="user"
                placeholder="Tu Usuario"
                id="user"
                label="Tu Usuario"
              />

              <ErrorMessage name="user" render={renderError} />
              {/* NO SE MUESTRA */}
            </Box>

            <div>
              {/* <label>Usuario:</label>
              <Field
                type="text"
                id="user"
                name="user"
                placeholder="Tu Usuario"
              /> */}
              <ErrorMessage name="user" render={renderError} />
            </div>

            <Box 
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
                color: "black",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                type="password"
                name="password"
                placeholder="Tu Contraseña"
                id="password"
                label="Contraseña"
              />

            <ErrorMessage name="password" render={renderError} />
              {/* NO SE MUESTRA */}
            </Box>
            
            <div>
              {/* <label>Contraseña:</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Tu Contraseña"
              /> */}
              <ErrorMessage name="password" render={renderError} />
            </div>
            <button type="submit">Registrarse</button>
          </Box>
          </>
        )}
      </Formik>
    </div>
  );
};

export default createform;
