import React from "react";
import { useSelector } from "react-redux";

const Step1 = ({setbookingPost , bookingPost , finaldata , setfinaldata}) => {
  const { businessId: business } = useSelector((state) => state.business);
  const { services } = business.data?.attributes;
  
  function handlerServices(e) {
    if (e.target.checked) {
      setbookingPost({
        ...bookingPost,
        services: e.target.id,
      });
      setfinaldata({
        ...finaldata,
        services: e.target.value
      })
      
    } else {
      setbookingPost({
        ...bookingPost,
        services: bookingPost.services.filter((r) => r !== e.target.id),
      });
      setfinaldata({
        ...finaldata,
        services:finaldata.services.filter((r) => r!== e.target.value)
      })
    }
  }
  
  return (
    <div className="flex font-cool_g flex-col w-full items-center py-24">
      {services.data?.map((e) => {
        if (e.attributes.active) {
          return (
            <div className="flex md:w-1/4 md:justify-start w-full justify-center items-center">
              <input
                id={e.id}
                type="radio"
                className="cursor-pointer rounded border-gray-300 text-blue-600 transition focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75 mr-2"
                value={e.attributes.name}
                checked={e.id == bookingPost.services ? true : false}
                name="service"
                onChange={(e) => {
                  handlerServices(e)
                }}
              />
              <label
                for="basic"
                className="cursor-pointer truncate text-3xl font-medium text-gray-500"
              
              >
                {e.attributes.name} (${e.attributes.price})
              </label>
            </div>
          );
        } else {
          return null
        }     
      })}
    </div>
  );
};

export default Step1;
