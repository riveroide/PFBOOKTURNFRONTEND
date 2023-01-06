import React from "react";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { postClient } from "redux/actions/clients/postClient.js";
import * as yup from "yup";

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

  const renderError = (message) => <p>{message}</p> 
  return (
    <>
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
          <Form className="formulario">
            <h1>SOY EL FORMULARIO DE CREACION DE CLIENTE</h1>
            <Link href="/client/login">
              <button>Volver al login</button>
            </Link>
            <div>
              <label>Nombre:</label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Tu Nombre"
              />
              <ErrorMessage name="name" render={renderError}/>
            </div>
            <div>
              <label>Apellido:</label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Tu Apellido"
              />
              <ErrorMessage name="lastName" render={renderError}/>
            </div>
            <div>
              <label>Email:</label>
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="email@example.com"
              />
              <ErrorMessage name="email" render={renderError}/>
            </div>
            <div>
              <label>Usuario:</label>
              <Field
                type="text"
                id="user"
                name="user"
                placeholder="Tu Usuario"
              />
              <ErrorMessage name="user" render={renderError}/>
            </div>
            <div>
              <label>Contraseña:</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Tu Contraseña"
              />
              <ErrorMessage name="password" render={renderError}/>
            </div>
            <button type="submit">Registrarse</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default createform;
