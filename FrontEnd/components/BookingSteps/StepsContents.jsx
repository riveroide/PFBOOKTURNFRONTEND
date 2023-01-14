import React from 'react'
import Step1 from './Steps/Step1'
import Step2 from './Steps/Step2'
import Step3 from './Steps/Step3'

const StepsContents = ({ stepnum , services }) => {
if(stepnum===1) return (<Step1 services={services}/>)
if(stepnum===2) return (<Step2/>)
  return (
    <Step3/>
  )
}

export default StepsContents