import React, {useEffect} from 'react'
import stylesDetails from '../styles/DetailsClients.module.css'
import Image from 'next/image'
//import calendario from "../img/calendario.jpg"}
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function DetailsClients() {
  useEffect(()=> {
    AOS.init()
  })
  return (
    <div className={stylesDetails.details_container} >
      <div className={stylesDetails.section} >
        <div className={stylesDetails.section_texto} >
          <p data-aos="fade-right" className={stylesDetails.section_title} >Gestionar reservas con mayor facilidad</p>
          <p  data-aos="fade-left" className={stylesDetails.section_content}  >¿Estás buscando a un barbero, peluquero, masajista o manicurista local? ¿Necesitas reservar una cita para un recorte de barba, una depilación de cejas o un masaje de tejido profundo?</p>
        </div>
        <Image data-aos="fade-left" src="/calendario6.jpg" height={400} width={400} />
        {/*<img src={calendario} />*/}
      </div>


      <div className={stylesDetails.section2} >
      <Image data-aos="fade-left" src="/reseñas4.jpg" height={400} width={400} />
        <div className={stylesDetails.section_texto} >
          <p data-aos="fade-right" className={stylesDetails.section_title} >Reserva con los mejores </p>
          <p data-aos="fade-left" className={stylesDetails.section_content}  >Navega por aplicación para conocer los principales negocios de salud y belleza en el marketplace de Bookturn junto con los locales mejores puntuados. </p>
        </div>
      </div>
    
    </div>
  )
}

