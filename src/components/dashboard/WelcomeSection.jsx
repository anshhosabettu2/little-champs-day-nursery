import React from 'react';
import { CalendarIcon } from './DashboardIcons';

const WelcomeSection = ({ onViewCalendar }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-3 px-4 sm:px-6 lg:px-8">
      {/* Left: Greeting & Subtitle */}
      <div>
        <h1 className="text-[26px] sm:text-[30px] lg:text-[32px] font-bold text-[#172044] tracking-tight leading-tight">
          Good Morning, Emma!
        </h1>
        <p className="mt-1 text-[13.5px] sm:text-[14px] text-[#788195] font-normal">
          Here's what's happening today at Little Champs Day Nursery
        </p>
      </div>

      {/* Right: Date & View Calendar Button */}
      <div className="flex items-center gap-3 self-start sm:self-center">
        <span className="text-[13.5px] font-medium text-[#172044] whitespace-nowrap">
          Tuesday, 14 Oct 2026
        </span>
        <button
          type="button"
          onClick={onViewCalendar}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#E0D7FA] text-[#7045E8] text-[13px] font-semibold shadow-xs hover:bg-[#F9F7FE] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
        >
          <CalendarIcon className="w-3.5 h-3.5 text-[#7045E8]" />
          <span>View Calendar</span>
        </button>
      </div>
    </div>
  );
};

export default WelcomeSection;

