import React, { useEffect } from "react";
import Navbar from "components/Navbar/Navbar.jsx";
import FooterBussines from "components/FooterBussines/FooterBussines.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

import emailjs from "@emailjs/browser";
const index = () => {
  useEffect(() => {
    AOS.init();
  });
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_55j4zts",
        "template_cpebx08",
        e.target,
        "user_5hA9JKUjBoFTxoijU4HlY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center h-screen mt-28">
        <div className="">
          <p data-aos="fade-up">Hola, mandanos un correo</p>
        </div>

        <form data-aos="fade-up" onSubmit={sendEmail} className="w-80">
          <div className="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nombre
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="nombre"
              name="user_name"
              required
            />
          </div>
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="mail"
              placeholder="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="user_email"
              required
            />
          </div>

          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Tu consulta
          </label>
          <textarea
            name="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
          ></textarea>

          <button
            value="Send"
            type="submit"
            className="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>

        {/* <div className={styles.formContainer}>
          <form onSubmit={sendEmail} className={styles.form}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Mensaje</label>
            <textarea name="message" rows={6} />
            <input type="submit" value="Send" />
          </form>
        </div> */}
      </div>
      <FooterBussines />
    </>
  );
};

export default index;
