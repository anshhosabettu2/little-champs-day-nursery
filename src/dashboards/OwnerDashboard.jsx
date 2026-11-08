import { useNavigate } from "react-router-dom";

const OwnerDashboard = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("kidsnestUser");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#FFF9F0]">

      <main className="p-6 md:p-8">

        {/* Welcome */}
        <div>
          <span className="rounded-full bg-[#EEE9FA] px-3 py-1 text-xs font-semibold text-[#7563B8]">
            OWNER DASHBOARD
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#18323A]">
            Welcome back, {user.name.split(" ")[0]} 👋
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Here's what's happening at {user.nurseryName}.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl bg-[#EEE9FA] p-6">
            <span className="text-2xl">👶</span>

            <p className="mt-4 text-sm text-gray-600">
              Students
            </p>

            <h3 className="text-3xl font-bold text-[#7563B8]">
              85
            </h3>
          </div>

          <div className="rounded-3xl bg-[#FFF0E2] p-6">
            <span className="text-2xl">👩‍🏫</span>

            <p className="mt-4 text-sm text-gray-600">
              Teachers
            </p>

            <h3 className="text-3xl font-bold text-[#E58B4A]">
              12
            </h3>
          </div>

          <div className="rounded-3xl bg-[#FFF5C7] p-6">
            <span className="text-2xl">📊</span>

            <p className="mt-4 text-sm text-gray-600">
              Attendance
            </p>

            <h3 className="text-3xl font-bold text-[#C79B24]">
              91%
            </h3>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <span className="text-2xl">💰</span>

            <p className="mt-4 text-sm text-gray-600">
              Fees Due
            </p>

            <h3 className="text-3xl font-bold text-[#7563B8]">
              ₹1.2L
            </h3>
          </div>

        </div>

        {/* Main cards */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          {/* Attendance */}
          <div className="rounded-3xl bg-white p-7 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <h3 className="font-bold text-[#18323A]">
                  Today's Attendance
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Wednesday, October 1
                </p>
              </div>

              <span className="text-2xl">
                📊
              </span>

            </div>

            <div className="mt-7">

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Present
                </span>

                <span className="font-bold text-[#7563B8]">
                  77 / 85
                </span>
              </div>

              <div className="mt-3 h-3 overflow-hidden rounded-full bg-[#EEE9FA]">

                <div
                  className="h-full rounded-full bg-[#7563B8]"
                  style={{ width: "91%" }}
                />

              </div>

              <p className="mt-3 text-xs text-gray-500">
                91% attendance today
              </p>

            </div>

          </div>

          {/* Activities */}
          <div className="rounded-3xl bg-white p-7 shadow-sm">

            <div className="flex items-center justify-between">

              <h3 className="font-bold text-[#18323A]">
                Today's Activities
              </h3>

              <button className="text-xs font-semibold text-[#7563B8]">
                View All →
              </button>

            </div>

            <div className="mt-5 space-y-4">

              <div className="flex items-center gap-4 rounded-2xl bg-[#EEE9FA] p-4">
                <span className="text-2xl">📚</span>

                <div>
                  <p className="text-sm font-semibold">
                    Story Time
                  </p>

                  <p className="text-xs text-gray-500">
                    10:00 AM
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-[#FFF0E2] p-4">
                <span className="text-2xl">🎨</span>

                <div>
                  <p className="text-sm font-semibold">
                    Art & Craft
                  </p>

                  <p className="text-xs text-gray-500">
                    11:30 AM
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-[#FFF5C7] p-4">
                <span className="text-2xl">🎵</span>

                <div>
                  <p className="text-sm font-semibold">
                    Music Class
                  </p>

                  <p className="text-xs text-gray-500">
                    2:00 PM
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
};

export default OwnerDashboard;