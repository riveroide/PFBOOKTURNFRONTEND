import React from 'react'
import Navbar from 'components/Navbar/Navbar.jsx'
import NavbarCategories from 'components/NavbarCategories/NavbarCategories'
import FooterBussines from "components/FooterBussines/FooterBussines.jsx";
import styles from "../../../styles/Contact.module.css";
import emailjs from "@emailjs/browser"
const index = () => {

 
  

 const sendEmail = (e) => {
   e.preventDefault();

   emailjs.sendForm('service_55j4zts', 'template_cpebx08', e.target, 'user_5hA9JKUjBoFTxoijU4HlY')
     .then((result) => {
         console.log(result.text);
     }, (error) => {
         console.log(error.text);
      });
      e.target.reset()
 };
//https://www.youtube.com/watch?v=NgWGllOjkbs&ab_channel=RemyFamily
  return (
    <>
    
    <Navbar/>
    <NavbarCategories/>
    <div className={styles.container}>

    <div className={styles.textContainer}>
      <p>Hola, mandanos un correo</p>
    </div>

    <div className={styles.formContainer}>
     <form  onSubmit={sendEmail}  className={styles.form} > 
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Mensaje</label>
      <textarea name="message" rows={6}/>
      <input type="submit" value="Send" />
    </form>
    </div>
    </div>
    <FooterBussines/>
    </>
  )
}

export default index