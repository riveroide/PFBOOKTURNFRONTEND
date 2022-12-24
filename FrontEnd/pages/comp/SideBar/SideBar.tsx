import React from "react";
import styles from "./SideBar.module.css"
import imgProfile from '../../ImgProvisoria/Default_pfp.png'

const SideBar = () => {
    return (
        <div className={styles.sidebar}>
        <div>
          <img src={imgProfile.src} className={styles.profilePic} alt="Not Found" />
          <span>Nombre Apellido</span>
        </div>
        <ul className={styles.ul}>
          <li className={styles.options}>
            <a href="#">
              <h4>editar informacion</h4>
            </a>
            <hr/>
          </li>
          <li className={styles.options}>
            <a href="#">
              <h4>metodo de pago</h4>
            </a>
            <hr/>
          </li>
          <li className={styles.options}>
            <a href="#">
              <h4>historial</h4>
            </a>
            <hr/>
          </li>
          <li className={styles.options}>
            <a href="#">
              <h4>favoritos</h4>
            </a>
            <hr/>
          </li>
          <li className={styles.options}>
            <a href="#">
              <h4>opciones</h4>
            </a>
            <hr/>
          </li>
          <li className={styles.options}>
            <a href="#">
              <h4>eliminar cuenta</h4>
            </a>
            <hr />
          </li>
        </ul>
      </div>
    )
}

export default SideBar