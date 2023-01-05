import React from "react";
import styles from "./SideBar.module.css"
import imgProfile from '../../pages/ImgProvisoria/Default_pfp.png'

const SideBar = (props) => {
    
    return (
        <div className={styles.sidebar}>
        <div className={styles.usuario}>
          <img src={imgProfile.src} className={styles.profilePic} alt="Not Found" />
          <p>{props.client.name} {props.client.lastName}</p>
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