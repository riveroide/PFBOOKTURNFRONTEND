import React, {useEffect} from 'react'
import Image from 'next/image'
//import calendario from "../img/calendario.jpg"}
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function DetailsClients() {
  useEffect(()=> {
    AOS.init()
  })
  return (
    <div className='flex flex-col items-center w-[100vw] min-h-[70rem]' >
      <div className='flex lg:flex-row sm:flex-col items-center text-[#4e3900] mb-16' >
        <div className='w-[50vw] mt-20' >
          <p data-aos="fade-right" className='text-[2.5rem]' >Gestionar reservas con mayor facilidad</p>
          <p  data-aos="fade-left" className='text-[1.5rem]'  >¿Estás buscando a un barbero, peluquero, masajista o manicurista local? ¿Necesitas reservar una cita para un recorte de barba, una depilación de cejas o un masaje de tejido profundo?</p>
        </div>
        <Image data-aos="fade-left" src="/calendario6.jpg" height={400} width={400} />
        {/*<img src={calendario} />*/}
      </div>


      <div className='flex items-center lg:flex-row sm:flex-col-reverse text-[#4e3900] mb-40' >
      <Image data-aos="fade-left" src="/reseñas4.jpg" height={400} width={400} />
        <div className='w-[50vw] mt-20' >
          <p data-aos="fade-right" className='text-[2.5rem]' >Reserva con los mejores </p>
          <p data-aos="fade-left" className='text-[1.5rem]'  >Navega por aplicación para conocer los principales negocios de salud y belleza en el marketplace de Bookturn junto con los locales mejores puntuados. </p>
        </div>
      </div>
    
    </div>
  )
}

