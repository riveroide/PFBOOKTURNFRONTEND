import React, { useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { add , format } from "date-fns";

const Calendar = () => {
  const [date, setDate] = useState({
    justDate: null,
    dateTime: null,
  });

  console.log(date.dateTime)

  const getTimes = () => {
    if (!date.justDate) return;

    const { justDate } = date;

    const beginning = add(justDate, { hours: 9 })
    const end = add(justDate, { hours: 14 })
    const interval = 60  // minutos

    const times = [];
    for (let i = beginning; i <= end; i = add(i, {minutes: interval})) {
      times.push(i);
    }
    return times;
  };

  const times = getTimes();

  return (
    
    <div className="flex flex-col justify-center items-centers h-screen">
      {date.justDate ? (
        <div className="flex gap-4">
          {times?.map((time, i) => (
            <div key={`time-${i}`} className="rounded-sm bg-gray-100 p-2">
              <button
                type="button" className="border-solid border-2"
                onClick={() => setDate((prev) => ({ ...prev, dateTime: time }))}>
                {format(time, 'kk:mm')}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <ReactCalendar
        className="REACT-CALENDAR p-2"
        minDate={new Date()}
          onClickDay={(date) =>
            setDate((prev) => ({ ...prev, justDate: date }))
          }
          view="month"
          locale="es-ES"
        />
      )}
    </div>
    
  );
};

export default Calendar;
