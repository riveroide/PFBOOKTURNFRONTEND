import React from "react";
import Calendar from "../Calendar/Calendar";

const Step2 = ({ setbookingPost, bookingPost, finaldata, setfinaldata }) => {
  return (
    <Calendar
      setbookingPost={setbookingPost}
      bookingPost={bookingPost}
      finaldata={finaldata}
      setfinaldata={setfinaldata}
    />
  );
};

export default Step2;
