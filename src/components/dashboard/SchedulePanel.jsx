import React from 'react';

const scheduleData = [
  { time: '08:00', activity: 'Morning drop-off' },
  { time: '09:00', activity: 'Free play & activities' },
  { time: '10:30', activity: 'Snack time' },
  { time: '11:00', activity: 'Outdoor learning' },
  { time: '12:00', activity: 'Lunch' },
  { time: '13:00', activity: 'Nap / Quiet time' },
  { time: '14:30', activity: 'Focused activities' },
  { time: '15:30', activity: 'Parent pick-up' },
];

const SchedulePanel = () => {
  return (
    <div className="flex flex-col bg-white rounded-2xl border border-[#E8ECF2] p-4 sm:p-5 shadow-xs h-full">
      {/* Panel Heading */}
      <h2 className="text-[17px] sm:text-[18px] font-bold text-[#172044] mb-3.5 tracking-tight">
        Today's Schedule
      </h2>

      {/* Schedule List */}
      <div className="flex-1 flex flex-col justify-between space-y-1 sm:space-y-1.5">
        {scheduleData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 py-1.5 border-b border-[#F5F7FA] last:border-b-0 text-[13px] sm:text-[13.5px]"
          >
            <span className="w-13 sm:w-14 flex-shrink-0 font-medium text-[#788195]">
              {item.time}
            </span>
            <span className="font-medium text-[#172044] truncate">
              {item.activity}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulePanel;

