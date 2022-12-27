import React from "react";
import styles from "./NavbarCategories.module.css";
const NavbarCategories = () => {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.ul}>
          <li>Psicología</li>
          <li>Peluquería</li>
          <li>Barbería</li>
          <li>Manicuría</li>
          <li>Estética</li>
          <li>Cuidado para la piel</li>
          <li>Maquillaje</li>
          <li>Spa</li>
          <li>Más...</li>
        </ul>
      </div>
      ;
    </>
  );
};

export default NavbarCategories;
