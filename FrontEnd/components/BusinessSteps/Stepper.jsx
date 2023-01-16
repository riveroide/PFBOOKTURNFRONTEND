import React from "react";
import { useState } from "react";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";

const Stepper = () => {
  const [step, setStep] = useState(1);
  const [userEmail, setUserEmail] = useState(0);
  const [name, setName] = useState(0)
  console.log(userEmail, "stepper");
  console.log(name, "stepperName")
  if (step === 1) {
    return (
      <>
        <Step1 setUserEmail={setUserEmail} setName={setName} setStep={setStep} step={step} />
      </>
    );
  }
  if (step === 2) {
    return (
      <>
        <Step2 userEmail={userEmail} setStep={setStep} step={step} />
      </>
    );
  }
  if (step === 3) {
    return (
      <>
        <Step3 setStep={setStep} step={step} email={userEmail} name={name} />
      </>
    );
  }
};

export default Stepper;

// import React from "react";
// import { useState } from "react";
// import { Step1 } from "./Steps/Step1";

// export default Stepper = () => {
//   const [step, setStep] = useState(1);

//   if (step === 1) {
//     return (
//       <>
//         <Step1 />
//       </>
//     );
//   }
//   if (step === 2) {
//     return <div>Stepper2</div>;
//   }
// };
