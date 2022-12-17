import React from 'react'
import styles from './profile.module.css'

const profile = () => {
  return (
    <div>
      <div>
        <nav className={styles.navBar}>
          <a href="#" className={styles.navTitle}>BOOKTURN</a>
          <input type="text" className={styles.search} />
          <a href="#" className={styles.navTitle}>Cerrar sesion</a>
        </nav>
      </div>
      <div>
        <div>Profile</div>
      </div>
      <ul>
        <li>
          <a href="#">
            <span>editar informacion</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>metodo de pago</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>historial</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>favoritos</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>opciones</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>eliminar cuenta</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default profile