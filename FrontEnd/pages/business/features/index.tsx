import React from 'react'
import NavbarBussines from 'components/NavbarBussines/NavbarBussines'
import FeaturesList from 'components/FeaturesBusiness/FeaturesList/FeaturesList'
import style from '../../../styles/FeaturesBusiness.module.css'

const index = () => {
  return (
    <div>
      <NavbarBussines/>
      <FeaturesList/>
    </div>
  )
}

export default index