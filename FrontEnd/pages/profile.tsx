import React from 'react'
import styles from '../styles/profile.module.css'
import imgProfile from './ImgProvisoria/Default_pfp.png'

const profile = () => {
  return (
    <div>
      <div className={styles.navBar}>
        <a href="#" className={styles.navTitle}>BOOKTURN</a>
        <input type="text" className={styles.search} />
        <a href="#" className={styles.navTitle}>Cerrar sesion</a>
      </div>
      <div className={styles.sidebar}>
        <div>
          <img src={imgProfile.src} className={styles.profilePic} alt="Not Found" />
          <span>Nombre Apellido</span>
        </div>
        <ul className={styles.ul}>
          <li>
            <a href="#">
              <h4>editar informacion</h4>
            </a>
            <hr/>
          </li>
          <li>
            <a href="#">
              <h4>metodo de pago</h4>
            </a>
            <hr/>
          </li>
          <li>
            <a href="#">
              <h4>historial</h4>
            </a>
            <hr/>
          </li>
          <li>
            <a href="#">
              <h4>favoritos</h4>
            </a>
            <hr/>
          </li>
          <li>
            <a href="#">
              <h4>opciones</h4>
            </a>
            <hr/>
          </li>
          <li>
            <a href="#">
              <h4>eliminar cuenta</h4>
            </a>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default profile