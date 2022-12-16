import React from 'react'
import styles from '../styles/NavBarClients.module.css'

export default function NavBarClients() {
  return (
    <div className={styles.NavbarClientsContainer} >
   <div className={styles.logo} >
   <h4> 
   bookturn
    </h4>
   </div>
     
        <div className={styles.buttonsLogin} >
        <button className={styles.acceder} >acceder</button>
        <button className={styles.resgistrarse} >Registrarse</button>
        </div>
   
        </div>
  )
}
