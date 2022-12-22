import React from 'react'
import stylesNavBar from '../styles/NavBarClients.module.css'

export default function NavBarClients() {
  return (
    <div className={stylesNavBar.NavbarClientsContainer} >
   <div className={stylesNavBar.logo} >
   
   bookturn
  
   </div>
     
        <div className={stylesNavBar.buttonsLogin} >
        <button className={stylesNavBar.acceder} >acceder</button>
        <button className={stylesNavBar.resgistrarse} >Registrarse</button>
        </div>
   
        </div>
  )
}
