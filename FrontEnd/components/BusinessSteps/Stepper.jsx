import React from "react";
import { useState } from "react";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";

const Stepper = () => {
  const [step, setStep] = useState(1);
  if (step === 1) {
    return (
      <>
        <Step1 setStep={setStep} step={step} />
      </>
    );
  }
  if (step === 2) {
    return (
      <>
        <Step2 setStep={setStep} step={step} />
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
