import React, { useState } from 'react';
import { SearchIcon, BellIcon } from './DashboardIcons';
import avatarImg from '../../assets/avatar-emma.png';

const TopHeader = ({ onMenuClick, onNotificationClick, onProfileClick }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="flex items-center justify-between gap-4 py-3 px-4 sm:px-6 lg:px-8 bg-transparent">
      {/* Left: Mobile Toggle & Search Bar */}
      <div className="flex items-center gap-3 flex-1 max-w-xl">
        <button
          type="button"
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-xl text-[#302C78] hover:bg-gray-100 cursor-pointer"
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Search Input Field */}
        <div className="relative w-full max-w-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
            <SearchIcon className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search children, parents, observations..."
            className="w-full h-10 pl-10 pr-4 text-[13.5px] rounded-xl border border-[#E5E7EB] bg-white text-[#172044] placeholder:text-[#9CA3AF] outline-none shadow-xs transition-all focus:border-[#7045E8] focus:ring-2 focus:ring-[#7045E8]/10"
          />
        </div>
      </div>

      {/* Right: Notification Bell & Emma Carter Profile */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Notification Bell */}
        <button
          type="button"
          onClick={onNotificationClick}
          className="relative p-2 text-gray-600 hover:text-[#302C78] hover:bg-white rounded-full transition-colors cursor-pointer"
          aria-label="Notifications"
        >
          <BellIcon className="w-5 h-5 text-[#2B3658]" />
          {/* Red indicator dot */}
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#E53E3E] ring-2 ring-white" />
        </button>

        {/* User Profile */}
        <div
          onClick={onProfileClick}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <img
            src={avatarImg}
            alt="Emma Carter"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-xs group-hover:ring-[#7045E8]/30 transition-all"
          />
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-[13.5px] font-bold text-[#172044] leading-tight group-hover:text-[#7045E8] transition-colors">
              Emma Carter
            </span>
            <span className="text-[11.5px] font-normal text-[#788195] leading-tight mt-0.5">
              Nursery Manager
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;

