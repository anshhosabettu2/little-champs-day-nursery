import React from 'react';

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'observations', label: 'Observations' },
  { id: 'assessments', label: 'Assessments' },
  { id: 'attendance', label: 'Attendance' },
  { id: 'care', label: 'Care' },
  { id: 'documents', label: 'Documents' },
  { id: 'gallery', label: 'Gallery' },
];

const ChildTabBar = ({ activeTab = 'overview', onSelectTab }) => {
  return (
    <div className="border-b border-[#E8ECF2] px-4 sm:px-6 lg:px-8 mt-2">
      <nav className="flex space-x-6 sm:space-x-8 overflow-x-auto no-scrollbar" aria-label="Profile Tabs">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectTab(tab.id)}
              className={`pb-3 text-[13.5px] sm:text-[14px] font-semibold transition-all duration-150 relative cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'text-[#7045E8]'
                  : 'text-[#5A6376] hover:text-[#172044]'
              }`}
            >
              {tab.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7045E8] rounded-full" />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default ChildTabBar;

