import React, { useEffect } from "react";
import Stepper from "../../../../components/BusinessSteps/Stepper";
// import Link from "next/link";
import { useDispatch } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
//import * as yup from "yup";
import { useRouter } from "next/router";

const Createform = () => {
  // const [checked, setChecked] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

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
