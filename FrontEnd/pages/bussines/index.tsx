import React from 'react'
import NavbarBussines from "../../components/HomeBussines/NavbarBussines/NavbarBussines.jsx"
import LandingInfoBussines_s1 from "../../components/HomeBussines/LandingInfoBussines-s1/LandingInfoBussines-s1.jsx"

  


const index = () => {
  return (
    <div>
      <NavbarBussines/>
      <section id='n1'>
        <LandingInfoBussines_s1/>
      </section>
      <section id='n2'></section>
    </div>
  )
}

export default index