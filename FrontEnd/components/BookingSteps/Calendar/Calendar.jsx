import React, { useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { add , format } from "date-fns";
import { es } from "date-fns/locale";
import { useSelector } from "react-redux";

const Calendar = ({setbookingPost , bookingPost}) => {
  const { businessId: business } = useSelector(state => state.business)
  const { openhour, closehour} = business.data?.attributes
  const [date, setDate] = useState({
    justDate: null,
    dateTime: null,
  });

  console.log(date.dateTime)
  const getTimes = () => {
    if (!date.justDate) return;

    const { justDate } = date;

    const beginning = add(justDate, { hours: openhour })
    const end = add(justDate, { hours: closehour })
    const interval = 60  // minutos

    const times = [];
    for (let i = beginning; i <= end; i = add(i, {minutes: interval})) {
      times.push(i);
    }
    return times;
  };

  const times = getTimes();

const handlerDate = (e) =>{
  console.log(date.dateTime, "dentro del handler")
if(e.target.checked){
  setbookingPost({
    ...bookingPost,
    dateinfo: e.target.value
  })
}else {
  setbookingPost({
    ...bookingPost,
    dateinfo:""
  })
}

}

  return (
    
    <div className="flex justify-evenly items-centers h-[50%]">
        <ReactCalendar
        className="REACT-CALENDAR p-2"
        minDate={new Date()}
          onClickDay={(date) =>
            setDate((prev) => ({ ...prev, justDate: date }))
          }
          
          view="month"
          locale="es-ES"
        />
        
        {date.justDate ? (
        <div className="flex flex-col justify-center">
          {times?.map((time, i) => (
            <div key={`time-${i}`} className="rounded-sm bg-gray-100 p-2 flex">

              <input
                value={format(time, 'EEEE d MMMM R - kk:mm',{locale:es})}
                type="checkbox" className="border-solid border-2 capitalize h-4 w-4 flex align-middle "
                onChange={(e) =>{
                  handlerDate(e) 
                  setDate((prev) => ({ ...prev, dateTime: format(time, 'EEEE d MMMM R kk:mm',{locale:es}) }))
                } 
              } name="false" 
                />
        
                <p className="cursor-pointer truncate text-base font-medium text-gray-500 items-center">{format(time, 'EEEE d MMMM R - kk:mm',{locale:es})}</p>
             
                
                
              
            </div>
          ))}
        </div>
      ) : null }
    </div>
    
  );
};

export default Calendar;
