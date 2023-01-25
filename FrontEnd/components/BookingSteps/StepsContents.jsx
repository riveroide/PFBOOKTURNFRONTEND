import { useState } from "react";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";

const StepsContents = ({ stepnum, setbookingPost, bookingPost }) => {
  const [finaldata, setfinaldata] = useState({
    services: [],
    dateinfo: "",
  });

  if (stepnum === 1)
    return (
      <div className="h-full">
        <Step1
          setbookingPost={setbookingPost}
          bookingPost={bookingPost}
          finaldata={finaldata}
          setfinaldata={setfinaldata}
        />
      </div>
    );
  if (stepnum === 2)
    return (
      <div className="h-full">
        <Step2
          setbookingPost={setbookingPost}
          bookingPost={bookingPost}
          finaldata={finaldata}
          setfinaldata={setfinaldata}
        />
      </div>
    );
  return (
    <div className="h-full flex justify-center">
      <Step3
        setbookingPost={setbookingPost}
        bookingPost={bookingPost}
        finaldata={finaldata}
        setfinaldata={setfinaldata}
      />
    </div>
  );
};

export default StepsContents;
