import React from 'react'
import stylesAbout from '../styles/AboutHomeClient.module.css'

export default function AboutHomeClient() {
  return (
    <div className={stylesAbout.about_container} >
      <div className={stylesAbout.div_container} >
        <div className={stylesAbout.div_clientes} >
          <div className={stylesAbout.about_content} >
            Titulo 1
          </div>
       
        </div>
        <div className={stylesAbout.div_empresa} >
          <div className={stylesAbout.about_content}>
          Titulo 2
          </div>
        </div>
      </div>
    </div>
  )
}
