import { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  add,
  eachDayOfInterval,
  isSameDay,
  isSameMonth
} from "date-fns";
import ArrowLeft from "~/assets/icons/arrow-left.svg?react";
import ArrowRight from "~/assets/icons/arrow-right.svg?react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>();

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const handlePrevMonth = () => {
    setCurrentDate(prev => add(prev, { months: -1 }));
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => add(prev, { months: 1 }));
  };

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    setCurrentDate(date);
  };

  return (
    <div className="max-w-md">
      {/* Header */}
      <div className="flex justify-between items-center px-8">
        <h2 className="text-20 font-semibold text-gray-800">
          {format(currentDate, "dd MMMM yyyy")}
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={handlePrevMonth}
            className="p-2 rounded-sm bg-blue-light-hover"
          >
            <ArrowLeft className="text-blue-normal" />
          </button>
          <button
            onClick={handleNextMonth}
            className="p-2 rounded-sm bg-blue-light-hover"
          >
            <ArrowRight className="text-blue-normal" />
          </button>
        </div>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 gap-2 mt-4 text-10 text-gray-500 text-center">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-2 text-center mt-2">
        {days.map((day, index) => {
          const isToday = isSameDay(day, new Date());
          const isCurrentMonth = isSameMonth(day, currentDate);
          const isActiveDay = selectedDate && isSameDay(selectedDate, day);

          return (
            <div key={index} onClick={() => handleSelectDate(day)}>
              <div
                className={`flex justify-center items-center w-[40px] h-[40px] rounded-full text-12 select-none ${
                  isActiveDay
                    ? "bg-blue-normal text-white"
                    : isToday
                    ? "bg-blue-light cursor-pointer"
                    : isCurrentMonth
                    ? "text-gray-800 hover:bg-blue-light-hover cursor-pointer"
                    : "text-gray-300 cursor-pointer hover:bg-blue-light hover:text-black"
                }`}
              >
                {format(day, "d")}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
