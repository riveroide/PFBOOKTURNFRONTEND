import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import FooterBussines from "components/FooterBussines/FooterBussines.jsx";
import LandingInfoBussines from "../../components/HomeBussines/LandingInfoBussines/LandingInfoBussines"
const index = () => {
  return (
    <>
      
      <Navbar/>
      <LandingInfoBussines />
      <FooterBussines />
      
    </>
  )
}

export default index
