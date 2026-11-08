import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HomeIcon,
  ChildrenIcon,
  AttendanceIcon,
  ObservationIcon,
  PlanningIcon,
  AssessmentIcon,
  MessageIcon,
  CalendarIcon,
  MealsCareIcon,
  FeesFundingIcon,
  ReportsIcon,
  SettingsIcon,
} from './DashboardIcons';
import sidebarLogo from '../../assets/sidebar-logo.png';
import logoImg from '../../assets/little-champs-logo.png';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: HomeIcon, path: '/dashboard' },
  { id: 'children', label: 'Children', icon: ChildrenIcon, path: '/children' },
  { id: 'attendance', label: 'Attendance', icon: AttendanceIcon },
  { id: 'planning', label: 'Planning', icon: PlanningIcon },
  { id: 'assessments', label: 'Assessments', icon: AssessmentIcon },
  { id: 'observations', label: 'Learning Journal', icon: ObservationIcon },
  { id: 'messages', label: 'Messages', icon: MessageIcon },
  { id: 'calendar', label: 'Calendar', icon: CalendarIcon },
  { id: 'meals-care', label: 'Meals & Care', icon: MealsCareIcon },
  { id: 'fees-funding', label: 'Fees & Funding', icon: FeesFundingIcon },
  { id: 'reports', label: 'Reports', icon: ReportsIcon },
  { id: 'settings', label: 'Settings', icon: SettingsIcon },
];

const DashboardSidebar = ({ activeTab = 'dashboard', onSelectTab, isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleNavClick = (item) => {
    if (item.path) {
      navigate(item.path);
    }
    if (onSelectTab) {
      onSelectTab(item.id);
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden backdrop-blur-xs transition-opacity"
        />
      )}

      {/* Sidebar Container (approx 18% of screen) */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col w-[185px] xl:w-[210px] 2xl:w-[18%] bg-[#302C78] text-white px-2.5 sm:px-3 py-3 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto lg:h-full lg:rounded-r-[20px] select-none flex-shrink-0 ${
          isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo and Branding Header */}
        <div className="flex items-center px-1.5 pt-0.5 pb-2.5 border-b border-white/10 mb-1.5">
          <img
            src={sidebarLogo}
            alt="Little Champs Day Nursery"
            className="h-9 w-auto object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = logoImg;
            }}
          />
        </div>

        {/* Navigation Items (12 items matching the reference screenshot exactly) */}
        <nav className="flex-1 space-y-0.5 overflow-y-auto pr-0.5 custom-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item)}
                className={`flex w-full items-center gap-2.5 px-3 py-2 rounded-xl text-[12.5px] font-medium transition-all duration-150 cursor-pointer text-left ${
                  isActive
                    ? 'bg-[#E9E2FF] text-[#302C78] font-bold shadow-xs'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 flex-shrink-0 ${
                    isActive ? 'text-[#302C78]' : 'text-white/85'
                  }`}
                />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default DashboardSidebar;
