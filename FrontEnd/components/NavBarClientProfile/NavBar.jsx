import React from "react";
import styles from "./NavBar.module.css"
import {signOut} from "next-auth/react"

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <a href="http://localhost:3000" className={styles.navTitle}>bookturn</a>
            <input type="text"/>
            <a href='http://localhost:3000' onClick={() => signOut()} className={styles.navTitle}>Cerrar sesion</a>
        </div>
    )
}

export default NavBar