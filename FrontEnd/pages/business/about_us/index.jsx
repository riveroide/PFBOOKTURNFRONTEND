import React from 'react'
import Navbar from 'components/Navbar/Navbar.jsx'
import NavbarCategories from 'components/NavbarCategories/NavbarCategories'
import AboutUsCard from "components/AboutUsCard/AboutUsCard"
import FooterBussines from "components/FooterBussines/FooterBussines.jsx";


const index = () => {


  return (
    <>
    <Navbar/>
    <NavbarCategories/>
    <div
     className="flex flex-col items-center min-h-screen w-screen"
     >
    <div 
    className="w-2/5 pt-4"
    >
      <h3>Somos un equipo de 7 personas y Camilo. Desarrollamos esta app para aprobar el PF de Soy Henry el mejor bootcamp de toda la wea conchesumare</h3>
    </div>
   <div 
   className="flex justify-center pt-16"
   >
    <ul
    className='flex justify-center flex-wrap items-stretch h-full gap-[50px] max-w-[50%]'
    >
      <li><AboutUsCard/></li>
      <li><AboutUsCard/></li>
      <li><AboutUsCard/></li>
      <li><AboutUsCard/></li>
      <li><AboutUsCard/></li>
      <li><AboutUsCard/></li>
      <li><AboutUsCard/></li>
      <li><AboutUsCard/></li>
    </ul>
   </div>
    </div>
    <FooterBussines/>
    </>
  )
}

export default index