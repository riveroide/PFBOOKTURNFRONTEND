import React, { useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { add , format } from "date-fns";
import { es } from "date-fns/locale";
import { useSelector } from "react-redux";

const Calendar = ({setbookingPost , bookingPost , finaldata , setfinaldata }) => {
  const { businessId: business } = useSelector(state => state.business)
  const { openhour, closehour} = business.data?.attributes
  const [date, setDate] = useState({
    justDate: null,
    dateTime: null,
  });

  console.log(date.dateTime,"soy la fecha")
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
  setfinaldata({
    ...finaldata,
    dateinfo:e.target.value
  })
}else {
  setbookingPost({
    ...bookingPost,
    dateinfo:""
  })
  setfinaldata({
    ...finaldata,
    dateinfo:""
  })
}
console.log(finaldata, "soy final data")
}

  return (
    
    <div className="flex flex-col justify-center items-center h-full mb-4 gap-4">
      <div>

        <ReactCalendar
        className="REACT-CALENDAR p-2"
        minDate={new Date()}
        onClickDay={(date) =>
          setDate((prev) => ({ ...prev, justDate: date }))
        }
        // tileDisabled={({ date }) =>(
          //   date.getDay() === 0
          // )
            
          // }
          view="month"
          locale="es-ES"
          />
          </div>
        
        {date.justDate ? (
        <div className="flex flex-row max-w-full flex-wrap justify-center rounded bg-blue-500 border border-zinc-500 border-solid">
          {times?.map((time, i) =>  (
              <div key={`time-${i}`} className={` p-2 md:px-5 flex items-center`}>

              <input
                value={format(time, 'EEEE d MMMM R kk:mm',{locale:es})}
                type="radio" className={`border-solid border-2 capitalize h-3 w-4 flex align-middle my-2 mr-2 bg-blue-500 `}
                onChange={(e) =>{
                  handlerDate(e) 
                  setDate((prev) => ({ ...prev, dateTime: format(time, 'EEEE d MMMM R kk:mm',{locale:es}) }))
                } 
              } name="hour" 
                />
        
                <p className="cursor-pointer truncate text-base font-medium text-white items-center ">{format(time, 'kk:mm',{locale:es})}</p>
             
                
                
              
            </div>
          ))}
       
        </div>
      ) : null }
    </div>
    
  );
};

export default Calendar;
