import React from 'react'
import stylesAbout from '../styles/AboutHomeClient.module.css'
import CardResult from './CardResult/CardResult'

export default function AboutHomeClient() {
  return (
    <div className={stylesAbout.about_container} >
      
      {/*<div className={stylesAbout.cards} >
        Acá van las cards
        <CardResult />
        <CardResult />
        <CardResult />
  </div>*/}

      <div className={stylesAbout.div_container} >
        <div className={stylesAbout.div_clientes} >
          <div className={stylesAbout.about_content} >
            <p className={stylesAbout.about_title} >Busca y reserva un turno</p>
            <div className={stylesAbout.about_description} >
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ullam praesentium laudantium nihil dolor ipsum omnis quas, tenetur quasi hic, nisi pariatur eius magni officiis id quis ratione tempora ipsa?</p>
            </div>
          </div>
       
        </div>
        <div className={stylesAbout.div_empresa} >
          <div className={stylesAbout.about_content}>
          <p className={stylesAbout.about_title}  >BookTurn para tu empresa</p>
          <div  className={stylesAbout.about_description}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ullam praesentium laudantium nihil dolor ipsum omnis quas, tenetur quasi hic, nisi pariatur eius magni officiis id quis ratione tempora ipsa?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
