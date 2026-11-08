import { useNavigate } from "react-router-dom";

const DashboardNavbar = ({ user, onMenuClick }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("kidsnestUser");
    navigate("/login");
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 h-16 border-b border-[#E8E2F5] bg-white">
      <div className="flex h-full items-center justify-between px-4 md:px-6">

        {/* Left */}
        <div className="flex items-center gap-3">

          {/* Mobile menu */}
          <button
            onClick={onMenuClick}
            className="rounded-lg p-2 text-gray-600 hover:bg-[#F0EEFA] lg:hidden"
          >
            ☰
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEE9FA]">
              🌱
            </div>

            <div>
              <h1 className="text-lg font-bold leading-none text-[#6C63A8]">
                KidsNest
              </h1>

              <p className="mt-1 hidden text-[9px] text-gray-400 sm:block">
                Smart Nursery Management
              </p>
            </div>

          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-3">

          {/* Notification */}
          <button className="relative flex h-9 w-9 items-center justify-center rounded-full hover:bg-[#F0EEFA]">
            🔔

            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-[#F4A261]" />
          </button>

          {/* User */}
          <div className="hidden items-center gap-2 border-l border-gray-200 pl-4 sm:flex">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEE9FA]">
              👩
            </div>

            <div>
              <p className="text-sm font-semibold text-[#26352D]">
                {user.name}
              </p>

              <p className="text-[11px] capitalize text-gray-400">
                {user.role}
              </p>
            </div>

          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="rounded-xl border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 transition hover:border-[#6C63A8] hover:text-[#6C63A8]"
          >
            Logout
          </button>

        </div>

      </div>
    </header>
  );
};

export default DashboardNavbar;