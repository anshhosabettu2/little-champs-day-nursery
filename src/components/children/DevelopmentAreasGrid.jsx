import React from 'react';

// 6 custom vector icons for Development Areas
const ChatIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const BookIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const MathIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <line x1="12" y1="8" x2="12" y2="16" />
  </svg>
);

const ActivityIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="2" />
    <path d="M10 22v-5l-2-2.5 2.5-4 3 2.5v9" />
  </svg>
);

const GlobeIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const PaletteIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8c1.5 0 2.5 1 2.5 2s-1 2-2.5 2" />
    <circle cx="9" cy="10" r="1" fill="currentColor" />
    <circle cx="15" cy="10" r="1" fill="currentColor" />
  </svg>
);

const areasData = [
  {
    id: 'communication',
    name: 'Communication',
    status: 'On track',
    bg: 'bg-[#6CD2B0]',
    textColor: 'text-white',
    icon: ChatIcon,
  },
  {
    id: 'literacy',
    name: 'Literacy',
    status: 'On track',
    bg: 'bg-[#F9DD78]',
    textColor: 'text-[#856306]',
    icon: BookIcon,
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    status: 'On track',
    bg: 'bg-[#B15BFC]',
    textColor: 'text-white',
    icon: MathIcon,
  },
  {
    id: 'physical',
    name: 'Physical Development',
    status: 'On track',
    bg: 'bg-[#8CD0F8]',
    textColor: 'text-white',
    icon: ActivityIcon,
  },
  {
    id: 'understanding',
    name: 'Understanding the World',
    status: 'On track',
    bg: 'bg-[#F9C639]',
    textColor: 'text-white',
    icon: GlobeIcon,
  },
  {
    id: 'expressive-arts',
    name: 'Expressive Arts & Design',
    status: 'On track',
    bg: 'bg-[#FCA2A4]',
    textColor: 'text-white',
    icon: PaletteIcon,
  },
];

const DevelopmentAreasGrid = () => {
  return (
    <div className="mt-4 sm:mt-5">
      <h2 className="text-[17px] sm:text-[18px] font-bold text-[#172044] mb-3 tracking-tight">
        Development Areas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {areasData.map((area) => {
          const Icon = area.icon;
          return (
            <div
              key={area.id}
              className="flex items-center gap-3.5 bg-white rounded-2xl border border-[#E8ECF2] p-3.5 sm:p-4 shadow-xs hover:border-[#7045E8]/30 transition-colors"
            >
              {/* Colored Rounded Icon */}
              <div
                className={`flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${area.bg} ${area.textColor} flex-shrink-0 shadow-xs`}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Label & Status */}
              <div className="flex flex-col text-left overflow-hidden">
                <span className="text-[13px] sm:text-[13.5px] font-bold text-[#172044] leading-snug truncate">
                  {area.name}
                </span>
                <span className="text-[12px] font-semibold text-[#16A34A] mt-0.5 leading-tight flex items-center gap-1">
                  {area.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DevelopmentAreasGrid;

