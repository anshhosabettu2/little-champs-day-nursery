import { useNavigate } from "react-router-dom";

const AdminDashboard = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("kidsnestUser");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#F8F5FF]">

      {/* Main */}
      <main className="p-6 md:p-8">

        <div>
          <p className="text-sm font-medium text-[#7563B8]">
            ADMIN DASHBOARD
          </p>

          <h2 className="mt-1 text-3xl font-bold text-[#18323A]">
            Good Morning, Admin 👋
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Here's what's happening across your KidsNest network.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-3xl bg-[#EEE9FA] p-6">
            <div className="flex justify-between">
              <span className="text-2xl">🏫</span>
              <span className="text-xs text-green-600">
                +2
              </span>
            </div>

            <p className="mt-5 text-sm text-gray-600">
              Total Branches
            </p>

            <h3 className="mt-1 text-3xl font-bold text-[#7563B8]">
              12
            </h3>
          </div>

          <div className="rounded-3xl bg-[#FFF0E2] p-6">
            <div className="flex justify-between">
              <span className="text-2xl">👶</span>
              <span className="text-xs text-green-600">
                +12%
              </span>
            </div>

            <p className="mt-5 text-sm text-gray-600">
              Total Students
            </p>

            <h3 className="mt-1 text-3xl font-bold text-[#E58B4A]">
              1,248
            </h3>
          </div>

          <div className="rounded-3xl bg-[#FFF5C7] p-6">
            <div className="flex justify-between">
              <span className="text-2xl">📊</span>
              <span className="text-xs text-green-600">
                +4%
              </span>
            </div>

            <p className="mt-5 text-sm text-gray-600">
              Attendance
            </p>

            <h3 className="mt-1 text-3xl font-bold text-[#C79B24]">
              94%
            </h3>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex justify-between">
              <span className="text-2xl">💰</span>
              <span className="text-xs text-green-600">
                +8.5%
              </span>
            </div>

            <p className="mt-5 text-sm text-gray-600">
              Revenue
            </p>

            <h3 className="mt-1 text-3xl font-bold text-[#7563B8]">
              ₹8.4L
            </h3>
          </div>

        </div>

        {/* Lower Section */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">

          {/* Chart */}
          <div className="rounded-3xl bg-white p-6 shadow-sm lg:col-span-2">

            <div className="flex items-center justify-between">

              <div>
                <h3 className="font-bold text-[#18323A]">
                  Branch Performance
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Student enrollment by branch
                </p>
              </div>

              <button className="text-sm font-semibold text-[#7563B8]">
                View Report →
              </button>

            </div>

            <div className="mt-8 flex h-52 items-end gap-4">

              {[45, 70, 55, 85, 65, 90, 75, 95].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex flex-1 items-end"
                  >
                    <div
                      style={{
                        height: `${height}%`,
                      }}
                      className="w-full rounded-t-xl bg-[#A9A3D6]"
                    />
                  </div>
                )
              )}

            </div>

          </div>

          {/* Quick Card */}
          <div className="rounded-3xl bg-[#7563B8] p-7 text-white">

            <div className="text-3xl">
              ✨
            </div>

            <h3 className="mt-5 text-2xl font-bold">
              Everything looks good!
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/80">
              All nursery branches are active and student
              attendance is being updated regularly.
            </p>

            <button className="mt-7 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#7563B8]">
              View Analytics
            </button>

          </div>

        </div>

      </main>
    </div>
  );
};

export default AdminDashboard;