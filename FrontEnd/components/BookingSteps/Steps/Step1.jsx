import React from "react";

const Step1 = ({ services }) => {
  return (
    <div className="font-cool_g flex-col items-center" >
      {services.data?.map((e) => {
        return (
            <div className="flex font-cool_g space-x-1.5 justify-center">
            <input
              id="basic"
              type="checkbox"
              className="cursor-pointer rounded border-gray-300 text-blue-600 transition focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
            />
            <label
              for="basic"
              className="cursor-pointer truncate text-xs font-medium text-gray-500"
            >
              {e.attributes.name}
            </label>
            </div>
        );
      })}
    </div>
  );
};

export default Step1;
