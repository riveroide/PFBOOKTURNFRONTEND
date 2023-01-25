import React from "react";
import stylesNavBar from "../styles/NavBarClients.module.css";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function NavBarClients() {
  return (
    <>
      <div className="flex justify-end mr-40 w-full">
        <Link href="/business">
          <p className="text-blue-500">Eres empresa?</p>
        </Link>
      </div>
      <div className={stylesNavBar.NavbarClientsContainer}>
        <div className={stylesNavBar.logo}>bookturn</div>

        <div className={stylesNavBar.buttonsLogin}>

            <button className={stylesNavBar.acceder} onClick={()=>signIn()}>acceder</button>


          <Link href="/client/login/createform">
            <button className={stylesNavBar.resgistrarse}>Registrarse</button>
          </Link>
        </div>
      </div>
    </>
  );
}
