import React from "react";
import { useState } from "react";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
//import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";
import { useSelector } from "react-redux";
const Stepper = () => {
  const [step, setStep] = useState(1);
  const [userEmail, setUserEmail] = useState(0);
  const [name, setName] = useState(0);
  const [emailBusiness, setEmailBusiness] = useState(0);
  const services = useSelector((state) => state.services);
  console.log(services);
  const [finalData, setFinalData] = useState({
    businessemail: "",
    address: "",
    telephone: "",
    openhour: "",
    closehour: "",
  });

  const [finalServices, setFinalServices] = useState({
    name: "",
    price: "",
  });

  console.log(finalData);

  if (step === 1) {
    return (
      <>
        <Step1
          setUserEmail={setUserEmail}
          setName={setName}
          setStep={setStep}
          step={step}
          setFinalData={setFinalData}
        />
      </>
    );
  }
  if (step === 2) {
    return (
      <>
        <Step2
          setEmailBusiness={setEmailBusiness}
          userEmail={userEmail}
          setStep={setStep}
          step={step}
          setFinalData={setFinalData}
        />
      </>
    );
  }
  if (step === 3) {
    return (
      <>
        <Step5
          setStep={setStep}
          step={step}
          email={userEmail}
          name={name}
          finalData={finalData}
          finalServices={finalServices}
        />{" "}
      </>
    );
  }
  if (step === 4) {
    return (
      <>
        step 444444 /{" "}
        <Step3
          emailBusiness={emailBusiness}
          setStep={setStep}
          step={step}
          email={userEmail}
          name={name}
          setFinalServices={setFinalServices}
        />
      </>
    );
  }
  // if (step === 3) {
  //   return (
  //     <>
  //       <Step5
  //         setStep={setStep}
  //         step={step}
  //         email={userEmail}
  //         name={name}
  //         finalData={finalData}
  //         finalServices={finalServices}
  //       />
  //     </>
  //   );
  // }
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
