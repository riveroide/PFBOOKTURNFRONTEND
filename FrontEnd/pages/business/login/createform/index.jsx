import React, { useEffect, useState } from "react";
// import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "../../../../redux/actions/users/postUser";
import { Formik, Field, Form, ErrorMessage } from "formik";
import AOS from "aos";
import "aos/dist/aos.css";
//import * as yup from "yup";

import { useRouter } from "next/router";

const Createform = () => {
  // const [checked, setChecked] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  // const router = useRouter();

  // const handleSwitchChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  useEffect(() => {
    AOS.init();
  });

  // const isRequired = "Campo obligatorio";
  // const singInSchema = yup.object({
  //   user: yup.string().required(isRequired).email("Debe ser un email valido"),
  //   password: yup
  //     .string()
  //     .required(isRequired)
  //     .min(8, "Debe ser de minimo 8 caracteres"),
  //   repeatPassword: yup
  //   .string()
  //     .required(isRequired)
  //   .min(8, "Debe ser de minimo 8 caracteres"),
  //   name: yup.string().required(isRequired),
  //   address: yup.string().required(isRequired),
  //   box: yup.boolean().required(isRequired)
  // });

  // const renderError = (message) => (
  //   <p className="help is-danger text-red-600">{message}</p>
  // );

  //  const handleCheck = event => {
  //    // 👇️ prevent page refresh
  //    event.preventDefault();

  //    console.log( 'check changed ✅');
  //  };

  return (
    <>
      <div
        data-aos="fade-up"
        className="flex flex-col w-screen h-screen justify-center items-center "
      >
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            role: "2",
          }}
          validate={(inputValue) => {
            let errores = {};
            // VALIDATE USERNAME
            if (!inputValue.username) {
              errores.nombre = "ingresa un nombre valido";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(inputValue.nombre)) {
              //   errores.nombre =
              //     "el nombre solo puede contener letras y espacios";
            }

            // VALIDATE EMAIL
            if (!inputValue.email) {
              //   errores.user = "ingresa un correo valido";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                inputValue.email
              )
            ) {
              errores.email = "Ingresa un mail valido";
            }

            // VALIDATE PASSWORD

            if (!inputValue.password) {
              errores.password = "ingresa un password valido";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(inputValue.password)) {
              errores.password = "password no valido";
            }

            return errores;
          }}
          onSubmit={(values, { resetForm }) => {
            dispatch(postUser(values));
            resetForm();
          }}
        >
          {({ errors }) => (
            <Form>
              <div className="mb-6 ">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                  Username
                </label>
                <Field
                  placeholder="Username"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  name="username"
                  type="text"
                />
                <ErrorMessage
                  name="username"
                  component={() => <div>{errors.username}</div>}
                />
              </div>
              <div className="mb-6 ">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                  Your email
                </label>
                <Field
                  placeholder="Your email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  name="email"
                  type="email"
                />
                <ErrorMessage
                  name="email"
                  component={() => <div>{errors.email}</div>}
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                  Your password
                </label>
                <Field
                  placeholder="Your password"
                  name="password"
                  type="password"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                />
                <ErrorMessage
                  name="password"
                  component={() => <div>{errors.password}</div>}
                />
              </div>

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
    //     <div data-aos="fade-up" className="flex flex-col w-screen h-screen justify-center items-center ">
    //        <Formik
    //         initialValues={{
    //           user: "",
    //           password: "",
    //           repeatPassword:"",
    //           name: "",
    //           address: "",
    //           box: false
    //         }}
    //         validationSchema={validationSchema}
    //         onSubmit={(values) => {
    //           console.log(values);
    //           dispatch(postBusiness(values));

    //           resetForm();

    //           router.push("/");
    //           alert("cliente registrado con éxito");

    //           // alert(JSON.stringify(values, null, 2));
    //         }}
    //       >

    //         <Form >
    //   <div className="mb-6 ">
    //     <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Your email</label>
    //     <Field
    //     placeholder="Your email"
    //               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
    //               name="user"
    //               type="email"
    //             />
    //             <ErrorMessage name="user" render={renderError} />
    //   </div>

    //   <div className="mb-6">
    //     <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Your password</label>
    //     <Field placeholder="Your password" name="password" type="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
    //     <ErrorMessage name="password" render={renderError} />
    //   </div>
    //   <div className="mb-6">
    //     <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900" placeholder="Repeat password">Repeat password</label>
    //     <Field placeholder="Repeat password" name="repeatPassword" type="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
    //     <ErrorMessage name="repeatPassword" render={renderError} />
    //   </div>
    //   <div className="mb-6 ">
    //     <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Business name</label>
    //     <Field
    //               placeholder="Business name"
    //               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
    //               name="name"
    //               type="text"
    //             />
    //             <ErrorMessage name="name" render={renderError} />
    //   </div>
    //   <div className="mb-6 ">
    //     <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Address</label>
    //     <Field
    //               placeholder="Address"
    //               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
    //               name="address"
    //               type="text"
    //             />
    //             <ErrorMessage name="address" render={renderError} />
    //   </div>
    //   <div className="flex items-start mb-6">
    //     <div className="flex items-center h-5">
    //     <Field onChange={(e) => handleSwitchChange(e)}  type="checkbox" name="box" checked={checked} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
    //     <ErrorMessage name="box" render={renderError} />
    //       {/* <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" /> */}

    //     </div>
    //     <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
    //   </div>
    //   <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
    // </Form>
    //       </Formik>
    //       {/* <Formik
    //         initialValues={{
    //           user: "",
    //           password: "",
    //           name: "",
    //           adress: "",
    //         }}
    //         validationSchema={validationSchema}
    //         onSubmit={(values) => {
    //           console.log(values);
    //           dispatch(postBusiness(values));

    //           resetForm();

    //           router.push("/");
    //           alert("cliente registrado con éxito");

    //           // alert(JSON.stringify(values, null, 2));
    //         }}
    //       >
    //         <Form className="w-1/4 p-4 bg-gray-200 shadow-md rounded-lg items-center justify-center flex flex-col">
    //           <h1>FORMULARIO DE CREACION DE EMPRESA</h1>
    //           <div>
    //             <h3 className="">Ingresa correo</h3>
    //             <Field
    //               className="text-center text-blue-800"
    //               name="user"
    //               type="email"
    //             />
    //             <ErrorMessage name="user" render={renderError} />
    //           </div>

    //           <h3>Ingresa contraseña</h3>
    //           <Field name="password" type="password" />
    //           <ErrorMessage name="password" render={renderError} />
    //           <h3>Ingresa nombre de la empresa</h3>
    //           <Field name="name" type="text" />
    //           <ErrorMessage name="name" render={renderError} />
    //           <h3>Ingresa la direccion</h3>
    //           <Field name="adress" type="text" />
    //           <ErrorMessage name="adress" render={renderError} />
    //           <button type="submit">Submit</button>
    //         </Form>
    //       </Formik> */}
    //     </div>
  );
};

export default Createform;
