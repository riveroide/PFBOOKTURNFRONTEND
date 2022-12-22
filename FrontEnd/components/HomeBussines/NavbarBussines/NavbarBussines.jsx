import React from 'react'
import styles from "./NavbarBussines.module.css"

const NavbarBussines = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <h1>Bookturn</h1>
        </div>
        <div className={styles.options}>
            <ul>
                <li>Funcionalidades</li>
                <li>Precios</li>
                <li>Quiénes somos</li>
                <li>Categorias</li>
                <li>Contacto</li>
            </ul>
        </div>
        <div className={styles.login}>
            <ul>
                <li><button>Login</button></li>
                <li><button>Register</button></li>
            </ul>
        </div>
    </div>
  )
}

export default NavbarBussines