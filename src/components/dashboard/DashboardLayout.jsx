import React, { useState } from 'react';
import DashboardSidebar from './DashboardSidebar';
import TopHeader from './TopHeader';

const DashboardLayout = ({ children, user }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F8FAFD] font-['Nunito',sans-serif]">
      {/* Fixed Vertical Sidebar (18% width on desktop) */}
      <DashboardSidebar
        activeTab={activeTab}
        onSelectTab={(tabId) => setActiveTab(tabId)}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content Area (82% width) */}
      <div className="flex-1 flex flex-col h-full overflow-y-auto custom-scrollbar">
        {/* Top Header */}
        <TopHeader
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          onNotificationClick={() => alert('No new notifications')}
          onProfileClick={() => alert(`Logged in as ${user?.name || 'Emma Carter'} (${user?.role || 'Nursery Manager'})`)}
        />

        {/* Dashboard Body */}
        <main className="flex-1 flex flex-col pb-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
