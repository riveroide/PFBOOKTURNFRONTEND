import React from "react";
import Link from "next/link";
import styles from "./NavbarBussines.module.css";

const NavbarBussines = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/business/">
          <h1>Bookturn</h1>
        </Link>
      </div>
      <div className={styles.options}>
        <ul>
          <li>
            <Link href="/business/features">Funcionalidades</Link>
          </li>
          <li>
            <Link href="/business/prices">Precios</Link>
          </li>
          <li>
            <Link href="/business/about_us">Quiénes Somos</Link>
          </li>
          <li>
            <Link href="/business/categories">Categorias</Link>
          </li>
          <li>
            <Link href="/business/contact">Contacto</Link>
          </li>
        </ul>
      </div>
      <div className={styles.login}>
        <ul>
          <li>
            <button>Login</button>
          </li>
          <li>
            <button>Register</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarBussines;
