import React from "react";
import { useSelector } from "react-redux";

const Step1 = ({setbookingPost , bookingPost}) => {
  const { businessId: business } = useSelector((state) => state.business);
  const { services } = business.data?.attributes;
  
  function handlerServices(e) {
    if (e.target.checked) {
      setbookingPost({
        ...bookingPost,
        services: [...bookingPost.services, e.target.id],
      });
      
    } else {
      setbookingPost({
        ...bookingPost,
        services: bookingPost.services.filter((r) => r !== e.target.id),
      });
    }
    
  }
  return (
    <div className="flex font-cool_g flex-col w-full items-center">
      {services.data?.map((e) => {
        return (
          <div className="flex w-1/4 items-center">
            <input
              id={e.id}
              type="checkbox"
              className="cursor-pointer rounded border-gray-300 text-blue-600 transition focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75 mr-2"
              value={e.attributes.name}
              name={e.attributes.name}
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
      })}
    </div>
  );
};

export default Step1;
