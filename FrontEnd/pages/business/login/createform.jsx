import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { postBusiness } from "redux/actions/business/postBusiness";
import { Formik, Field, Form, ErrorMessage } from "formik";

import * as yup from "yup";

import { useRouter } from "next/router";

const createform = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isRequired = "Campo obligatorio";
  const validationSchema = yup.object({
    user: yup.string().required(isRequired).email("Debe ser un email valido"),
    password: yup
      .string()
      .required(isRequired)
      .min(8, "Debe ser de minimo 8 caracteres"),
    name: yup.string().required(isRequired),
    adress: yup.string().required(isRequired),
  });

  const renderError = (message) => (
    <p className="help is-danger text-red-600">{message}</p>
  );

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center ">
      <Formik
        initialValues={{
          user: "",
          password: "",
          name: "",
          adress: "",
          totalRates: 0,
          totalRated: 0,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          dispatch(postBusiness(values));
          resetForm();
          alert("cliente registrado con éxito");
          router.push("/");
          // alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="w-1/4 p-4 bg-gray-200 shadow-md rounded-lg items-center justify-center flex flex-col">
          <h1>SOY EL FORMULARIO DE CREACION DE EMPRESA</h1>
          <div>
            <h3 className="">Ingresa correo</h3>
            <Field
              className="text-center text-blue-800"
              name="user"
              type="email"
            />
            <ErrorMessage name="user" render={renderError} />
          </div>

          <h3>Ingresa contraseña</h3>
          <Field name="password" type="password" />
          <ErrorMessage name="password" render={renderError} />
          <h3>Ingresa nombre de la empresa</h3>
          <Field name="name" type="text" />
          <ErrorMessage name="name" render={renderError} />
          <h3>Ingresa la direccion</h3>
          <Field name="adress" type="text" />
          <ErrorMessage name="adress" render={renderError} />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default createform;
