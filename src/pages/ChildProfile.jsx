import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import ChildProfileHeader from '../components/children/ChildProfileHeader';
import ChildTabBar from '../components/children/ChildTabBar';
import AboutCard from '../components/children/AboutCard';
import KeyInfoCard from '../components/children/KeyInfoCard';
import DevelopmentAreasGrid from '../components/children/DevelopmentAreasGrid';
import EditProfileModal from '../components/children/EditProfileModal';

const initialChildData = {
  name: 'Aarav Sharma',
  dob: '12 Mar 2023',
  age: 'Age 3y 7m',
  room: 'Preschool (3-5 years)',
  keyPerson: 'Sarah Khan',
  about:
    'Aarav is a curious and confident child who loves exploring the outdoors and creative activities. He enjoys playing with friends and shows great problem-solving skills.',
  allergies: 'None',
  dietary: 'Vegetarian',
  additionalNeeds: 'None',
  emergencyContact: '07412 345678',
};

const ChildProfile = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [childData, setChildData] = useState(initialChildData);

  const handleSidebarTabSelect = (tabId) => {
    if (tabId === 'dashboard') {
      navigate('/dashboard');
    } else if (tabId === 'children') {
      // already on children profile
    } else {
      // keep active tab feedback
    }
  };

  const handleSaveProfile = (updatedFields) => {
    setChildData((prev) => ({ ...prev, ...updatedFields }));
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F8FAFD] font-['Nunito',sans-serif]">
      {/* Left Navigation Sidebar (approx 18% desktop width, 'Children' active) */}
      <DashboardSidebar
        activeTab="children"
        onSelectTab={handleSidebarTabSelect}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Workspace Area */}
      <div className="flex-1 flex flex-col h-full overflow-y-auto custom-scrollbar">
        {/* Mobile Header Toggle */}
        <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-gray-100">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-xl text-[#302C78] hover:bg-gray-100 cursor-pointer"
            aria-label="Open navigation menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="font-bold text-[#172044] text-sm">Aarav Sharma</span>
          <div className="w-6" />
        </div>

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="pt-4 sm:pt-5 px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-[13.5px] font-medium text-[#788195]">
            <li>
              <Link
                to="/dashboard"
                className="hover:text-[#7045E8] transition-colors cursor-pointer"
              >
                Children
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-400 font-normal">
              &gt;
            </li>
            <li className="font-bold text-[#172044]">
              {childData.name}
            </li>
          </ol>
        </nav>

        {/* Profile Header (Portrait, Info, Edit Profile & Menu) */}
        <ChildProfileHeader
          child={childData}
          onEdit={() => setIsEditModalOpen(true)}
        />

        {/* Horizontal Navigation Tab Bar */}
        <ChildTabBar
          activeTab={activeTab}
          onSelectTab={(tabId) => setActiveTab(tabId)}
        />

        {/* Tab Content Body */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-5 pb-8">
          {activeTab === 'overview' && (
            <div className="space-y-4 sm:space-y-5">
              {/* Two Side-by-Side Information Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                {/* Left Card: About Aarav */}
                <AboutCard name={childData.name.split(' ')[0]} about={childData.about} />

                {/* Right Card: Key Information */}
                <KeyInfoCard info={childData} />
              </div>

              {/* Development Areas Section (3 columns x 2 rows) */}
              <DevelopmentAreasGrid />
            </div>
          )}

          {activeTab === 'observations' && (
            <div className="rounded-2xl border border-[#E8ECF2] bg-white p-6 shadow-xs text-center py-12">
              <h3 className="text-lg font-bold text-[#172044]">Observations for {childData.name}</h3>
              <p className="mt-1 text-sm text-[#788195]">3 recent learning observations logged this month.</p>
            </div>
          )}

          {activeTab === 'assessments' && (
            <div className="rounded-2xl border border-[#E8ECF2] bg-white p-6 shadow-xs text-center py-12">
              <h3 className="text-lg font-bold text-[#172044]">EYFS Progress Assessment</h3>
              <p className="mt-1 text-sm text-[#788195]">All 6 development areas are currently on track.</p>
            </div>
          )}

          {activeTab === 'attendance' && (
            <div className="rounded-2xl border border-[#E8ECF2] bg-white p-6 shadow-xs text-center py-12">
              <h3 className="text-lg font-bold text-[#172044]">Attendance Record</h3>
              <p className="mt-1 text-sm text-[#788195]">96% attendance rate over the current nursery term.</p>
            </div>
          )}

          {activeTab === 'care' && (
            <div className="rounded-2xl border border-[#E8ECF2] bg-white p-6 shadow-xs text-center py-12">
              <h3 className="text-lg font-bold text-[#172044]">Meals, Naps & Daily Care</h3>
              <p className="mt-1 text-sm text-[#788195]">Vegetarian dietary profile active. No recorded allergies.</p>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="rounded-2xl border border-[#E8ECF2] bg-white p-6 shadow-xs text-center py-12">
              <h3 className="text-lg font-bold text-[#172044]">Registration & Medical Documents</h3>
              <p className="mt-1 text-sm text-[#788195]">All parent consents and health declarations verified.</p>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="rounded-2xl border border-[#E8ECF2] bg-white p-6 shadow-xs text-center py-12">
              <h3 className="text-lg font-bold text-[#172044]">Activity Photo Gallery</h3>
              <p className="mt-1 text-sm text-[#788195]">Photos captured during nursery play and learning sessions.</p>
            </div>
          )}
        </main>
      </div>

      {/* Edit Profile Lightweight Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        child={childData}
        onSave={handleSaveProfile}
      />
    </div>
  );
};

export default ChildProfile;

