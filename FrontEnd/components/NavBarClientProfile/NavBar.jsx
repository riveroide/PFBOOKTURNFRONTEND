import React from "react";
import styles from "./NavBar.module.css"

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <a href="#" className={styles.navTitle}>bookturn</a>
            <input type="text"/>
            <a href="#" className={styles.navTitle}>Cerrar sesion</a>
        </div>
    )
}

export default NavBar