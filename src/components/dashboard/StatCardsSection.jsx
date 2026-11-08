import React from 'react';
import { ChildrenIcon, ObservationIcon, MessageIcon } from './DashboardIcons';

// Custom icons specifically styled for the 4 stat cards
const UsersGroupIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const DocPenIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M10 13l4 4" />
    <path d="M14 13l-4 4" />
  </svg>
);

const ChatSquareIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <line x1="8" y1="10" x2="16" y2="10" />
  </svg>
);

const statCardsData = [
  {
    id: 'children-today',
    label: 'Children in today',
    value: '28',
    bg: 'bg-[#F0EDFC]',
    iconColor: 'text-[#7045E8]',
    iconBg: 'bg-white',
    icon: UsersGroupIcon,
  },
  {
    id: 'absent',
    label: 'Absent',
    value: '5',
    bg: 'bg-[#FFF0F0]',
    iconColor: 'text-[#EA5B5B]',
    iconBg: 'bg-white',
    icon: UsersGroupIcon,
  },
  {
    id: 'observations',
    label: 'Observations',
    value: '12',
    bg: 'bg-[#EAF9F2]',
    iconColor: 'text-[#22C55E]',
    iconBg: 'bg-white',
    icon: DocPenIcon,
  },
  {
    id: 'messages',
    label: 'Messages',
    value: '6',
    bg: 'bg-[#FFF7E8]',
    iconColor: 'text-[#F59E0B]',
    iconBg: 'bg-white',
    icon: ChatSquareIcon,
  },
];

const StatCardsSection = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8 py-2">
      {statCardsData.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.id}
            className={`flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl ${card.bg} transition-all duration-150 hover:shadow-xs hover:scale-[1.01] cursor-pointer`}
          >
            {/* Icon Container */}
            <div
              className={`flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${card.iconBg} shadow-[0_2px_6px_rgba(0,0,0,0.03)] flex-shrink-0`}
            >
              <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${card.iconColor}`} />
            </div>

            {/* Metrics */}
            <div className="flex flex-col text-left overflow-hidden">
              <span className="text-2xl sm:text-[28px] font-bold text-[#172044] leading-tight">
                {card.value}
              </span>
              <span className="text-[12px] sm:text-[13px] font-medium text-[#788195] leading-tight truncate mt-0.5">
                {card.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatCardsSection;

