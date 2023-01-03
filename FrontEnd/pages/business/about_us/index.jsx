import React from 'react'
import NavbarBussines from 'components/NavbarBussines/NavbarBussines.jsx'
import NavbarCategories from 'components/NavbarCategories/NavbarCategories'
import AboutUsCard from "components/AboutUsCard/AboutUsCard"
import FooterBussines from "components/FooterBussines/FooterBussines.jsx";
import styles from "../../../styles/About_Us.module.css";

const index = () => {


  return (
    <>
    <NavbarBussines/>
    <NavbarCategories/>
    <div className={styles.container}>
    <div className={styles.textContainer}>
      <h3>Somos un equipo de 7 personas y Camilo. Desarrollamos esta app para aprobar el PF de Soy Henry el mejor bootcamp de toda la wea conchesumare</h3>
    </div>
   <div className={styles.cardContainer}>
    <ul>
      <li><AboutUsCard/></li>
      <li><AboutUsCard/></li>
      <li><AboutUsCard/></li>
      <li><AboutUsCard/></li>
      <li><AboutUsCard/></li>
      <li><AboutUsCard/></li>
      <li><AboutUsCard/></li>
      <li><AboutUsCard/></li>
    </ul>
   </div>
    </div>
    <FooterBussines/>
    </>
  )
}

export default index