import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutHomeClient() {
  useEffect(()=> {
    AOS.init()
  })
  return (
    <div className='flex justify-center mt-12 bg-white w-full' >
      <div  className='flex flex-row mt-16 justify-center flex-wrap text-[#3f3206ab]' >
        <div data-aos="fade-right" className='flex justify-center bg-[#d6b0063f] rounded-2xl m-8 p-8 h-96 lg:w-[40vw] sm:w-[80vw]' >
          <div   className='flex flex-col items-center' >
            <p className='text-3xl' >Busca y reserva un turno</p>
            <div className='font-cool_p text-2xl lg:w-[30vw] sm:w-[60vw] ' >
              <p>Como cliente en BookTurn podras encontrar y reservar turnos en cuestion de segundos, ya no tendrás que llamar por teléfono. Reserva cuando quieras y desde cualquier lugar las 24 horas del día.</p>
            </div>
          </div>
       
        </div>
        <div data-aos="fade-left"  className='flex justify-center bg-[#00000015] rounded-2xl m-8 p-8 h-96 lg:w-[40vw] sm:w-[80vw]' >
          <div className='flex flex-col items-center'>
          <p className='text-3xl'  >BookTurn para tu empresa</p>
          <div  className='font-cool_p text-2xl lg:w-[30vw] sm:w-[60vw]'>
              <p>Seas una peluquería, barbería, centro de uñas, gimnasio, spa u otro, BookTurn te ayuda a recibir pagos online y obtener clientes auto-reserva 24/7 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
