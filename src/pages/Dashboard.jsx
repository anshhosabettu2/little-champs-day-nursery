import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import WelcomeSection from '../components/dashboard/WelcomeSection';
import StatCardsSection from '../components/dashboard/StatCardsSection';
import SchedulePanel from '../components/dashboard/SchedulePanel';
import RoomOccupancyPanel from '../components/dashboard/RoomOccupancyPanel';
import RecentObservationsPanel from '../components/dashboard/RecentObservationsPanel';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('kidsnestUser')) || {
    name: 'Emma Carter',
    role: 'Nursery Manager',
    nurseryName: 'Little Champs Day Nursery',
    email: 'emma.carter@littlechamps.com',
  };

  return (
    <DashboardLayout user={user}>
      <div className="flex-1 flex flex-col justify-between w-full h-full space-y-2.5 sm:space-y-3">
        {/* Welcome Section */}
        <WelcomeSection
          onViewCalendar={() => alert('Calendar view')}
        />

        {/* 4 Statistics Cards */}
        <StatCardsSection />

        {/* 3 Main Dashboard Panels */}
        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-2 min-h-0">
          <div className="flex flex-col lg:flex-row gap-4 h-full">
            {/* Panel 1: Today's Schedule (29%) */}
            <div className="w-full lg:flex-[29_1_0%] flex flex-col min-w-0">
              <SchedulePanel />
            </div>

            {/* Panel 2: Room Occupancy (35%) */}
            <div className="w-full lg:flex-[35_1_0%] flex flex-col min-w-0">
              <RoomOccupancyPanel />
            </div>

            {/* Panel 3: Recent Observations (36%) */}
            <div className="w-full lg:flex-[36_1_0%] flex flex-col min-w-0">
              <RecentObservationsPanel
                onViewAll={() => alert('Viewing all recent observations')}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
