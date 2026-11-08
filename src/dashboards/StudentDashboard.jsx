import { useNavigate } from "react-router-dom";

const StudentDashboard = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("kidsnestUser");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#FFF9F0]">

        <main className="mx-auto max-w-6xl p-6 md:p-8">

        {/* Welcome */}
        <div className="rounded-3xl bg-[#EEE9FA] p-7 md:p-9">

          <p className="text-sm font-medium text-[#7563B8]">
            HELLO THERE! 👋
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#18323A]">
            Hi, {user.name.split(" ")[0]}! 🌟
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Ready for another fun day at {user.nurseryName}?
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#7563B8]">
              ⭐ Great Attendance
            </span>

            <span className="rounded-full bg-[#FFF5C7] px-4 py-2 text-xs font-semibold text-[#80691E]">
              🎨 Creative Learner
            </span>

          </div>

        </div>

        {/* Attendance */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-6 shadow-sm">

            <span className="text-3xl">
              📊
            </span>

            <p className="mt-5 text-sm text-gray-500">
              My Attendance
            </p>

            <h3 className="mt-1 text-3xl font-bold text-[#7563B8]">
              96%
            </h3>

          </div>

          <div className="rounded-3xl bg-[#FFF0E2] p-6">

            <span className="text-3xl">
              🏆
            </span>

            <p className="mt-5 text-sm text-gray-600">
              Activities
            </p>

            <h3 className="mt-1 text-3xl font-bold text-[#E58B4A]">
              18
            </h3>

          </div>

          <div className="rounded-3xl bg-[#FFF5C7] p-6">

            <span className="text-3xl">
              ⭐
            </span>

            <p className="mt-5 text-sm text-gray-600">
              Stars Earned
            </p>

            <h3 className="mt-1 text-3xl font-bold text-[#C79B24]">
              42
            </h3>

          </div>

        </div>

        {/* Activities */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">

          <div className="rounded-3xl bg-white p-7 shadow-sm">

            <h3 className="text-xl font-bold text-[#18323A]">
              Today's Activities 🎨
            </h3>

            <div className="mt-5 space-y-4">

              <div className="flex items-center gap-4 rounded-2xl bg-[#EEE9FA] p-4">
                <span className="text-2xl">
                  📚
                </span>

                <div>
                  <p className="font-semibold">
                    Story Time
                  </p>

                  <p className="text-xs text-gray-500">
                    10:00 AM
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-[#FFF0E2] p-4">
                <span className="text-2xl">
                  🎨
                </span>

                <div>
                  <p className="font-semibold">
                    Art & Craft
                  </p>

                  <p className="text-xs text-gray-500">
                    11:30 AM
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-[#FFF5C7] p-4">
                <span className="text-2xl">
                  🎵
                </span>

                <div>
                  <p className="font-semibold">
                    Music Class
                  </p>

                  <p className="text-xs text-gray-500">
                    2:00 PM
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Notice */}
          <div className="rounded-3xl bg-[#7563B8] p-7 text-white">

            <span className="text-3xl">
              📢
            </span>

            <h3 className="mt-5 text-xl font-bold">
              Nursery Notice
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/80">
              Annual Day celebrations are coming soon!
              Don't forget to practice your performance. 🎉
            </p>

            <button className="mt-6 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#7563B8]">
              View Notices
            </button>

          </div>

        </div>

      </main>
    </div>
  );
};

export default StudentDashboard;