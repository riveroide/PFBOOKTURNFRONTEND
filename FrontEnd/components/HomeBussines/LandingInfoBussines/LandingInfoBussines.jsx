import React, {useEffect} from "react";
import styles from "./LandingInfoBussines.module.css";
import Image from "next/image";
import RegisterButtomBusiness from "../RegisterButtomBusiness/RegisterButtomBusiness";
import ImageSlider from "../ImageSlider/ImageSlider";
import AOS from 'aos';
import 'aos/dist/aos.css';

const LandingInfoBussines = () => {
  useEffect(() => {
    
    AOS.init()
  })
  return (
    <div className={styles.container}>
      <div className={styles.info1}>
        <div className={styles.info1_cont}>
          <div className={styles.info1_texto}>
            <h1>
              El mejor software para peluquerías, centros de estética y negocios
            </h1>
            <p data-aos="fade-up"  >
              Bookturn te permite gestionar tu peluquería, barbería, centro de
              belleza, salón de uñas, etc, desde cualquier lugar con: agenda
              digital, herramientas de marketing, protección contra
              inasistencias, inventario, gestión de horarios, y mucho más.
            </p>
            <RegisterButtomBusiness />
          </div>
          <div className={styles.info1_img}>
            {/* <img src="/lading_img1-removebg-preview.png" alt="img" /> */}
            <img src="https://res.cloudinary.com/dquxxjngk/image/upload/v1671843080/Bookturn/src/lading_img1-removebg-preview_zcjukg.png" alt="img" />
          </div>
        </div>
        <div className={`${styles.wave} ${styles.wave1}`}></div>
        <div className={`${styles.wave} ${styles.wave2}`}></div>
        <div className={`${styles.wave} ${styles.wave3}`}></div>
        <div className={`${styles.wave} ${styles.wave4}`}></div>
      </div>
      <div className={styles.prueba}>
        <ImageSlider data-aos="fade-up"/>
      </div>
    </div>
  );
};

export default LandingInfoBussines;

