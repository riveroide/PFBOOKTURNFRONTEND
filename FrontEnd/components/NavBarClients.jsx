import React from "react";
import stylesNavBar from "../styles/NavBarClients.module.css";
import Link from "next/link";

export default function NavBarClients() {
  return (
    <div className={stylesNavBar.NavbarClientsContainer}>
      <div className={stylesNavBar.logo}>bookturn</div>

      <div className={stylesNavBar.buttonsLogin}>
        <Link href="/client/login">
        <button className={stylesNavBar.acceder}>acceder</button>
        </Link>
        
        <Link href="/business/login/createform">
          <button className={stylesNavBar.resgistrarse}>Registrarse</button>
        </Link>
      </div>
    </div>
  );
}
