import React from 'react'
import styles from '../styles/profile.module.css'
import SideBar from '../components/SideBarClientProfile/SideBar'
import NavBar from '../components/NavBarClientProfile/NavBar'

const profile = () => {
  return (
    <div>
      <NavBar/>
      <SideBar/>
      <div className={styles.content}>
        <h1>Bienvenid@ a tu historial</h1>
        <div>
          <ul className={styles.ul}>
            <li>
              <h4>Turno de ejemplo</h4>
              <span>Status</span>
              <span>12/12/22</span>
            </li>
            <li>
              <h4>Turno de ejemplo</h4>
              <span>Status</span>
              <span>12/12/22</span>
            </li>
            <li>
              <h4>Turno de ejemplo</h4>
              <span>Status</span>
              <span>12/12/22</span>
            </li>
          </ul>
          <h3>No se registran mas turnos a la fecha</h3>
          <hr className={styles.hr}/>
        </div>
      </div>
    </div>
  )
}

export default profile