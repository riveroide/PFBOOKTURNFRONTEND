import React, { useEffect } from "react";
import Stepper from "../../../../components/BusinessSteps/Stepper";
import AOS from "aos";
import "aos/dist/aos.css";

const Createform = () => {
  // const [checked, setChecked] = useState(false);

  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Stepper />
    </>
  );
};

export default Createform;
