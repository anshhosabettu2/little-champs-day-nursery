import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DemoSuccess = () => {
  const demoRequest = JSON.parse(
    localStorage.getItem("kidsnestDemoRequest")
  );

  return (
    <div className="min-h-screen bg-[#FFF9F0] px-4 py-12">

      <div className="flex min-h-[80vh] items-center justify-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-xl rounded-3xl bg-white p-8 text-center shadow-sm md:p-10"
        >

          {/* Success Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#EEE9FA] text-3xl text-[#7563B8]">
            ✓
          </div>

          <span className="mt-6 inline-block rounded-full bg-[#FFF0E2] px-4 py-2 text-xs font-semibold text-[#C46D35]">
            Demo Request Received
          </span>

          <h1 className="mt-5 text-3xl font-bold text-[#18323A] md:text-4xl">
            You're All Set! 🎉
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-600">
            Thank you for choosing KidsNest. We've received your
            demo request and our team will contact you to confirm
            the details.
          </p>

          {demoRequest && (
            <div className="mt-7 rounded-2xl bg-[#EEE9FA] p-5 text-left">

              <p className="mb-3 text-sm">
                <span className="font-semibold text-[#18323A]">
                  Nursery:
                </span>{" "}
                {demoRequest.nurseryName}
              </p>

              <p className="mb-3 text-sm">
                <span className="font-semibold text-[#18323A]">
                  Date:
                </span>{" "}
                {demoRequest.demoDate}
              </p>

              <p className="text-sm">
                <span className="font-semibold text-[#18323A]">
                  Time:
                </span>{" "}
                {demoRequest.demoTime}
              </p>

            </div>
          )}

          <p className="mt-6 text-xs text-gray-500">
            We look forward to showing you how KidsNest can
            simplify your nursery management.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <Link
              to="/"
              className="flex-1 rounded-xl border border-[#D8D1EE] px-5 py-3 text-sm font-semibold text-[#7563B8] transition hover:bg-[#F8F5FF]"
            >
              Back to Home
            </Link>

            <Link
              to="/login"
              className="flex-1 rounded-xl bg-[#7563B8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6654A8]"
            >
              Go to Login →
            </Link>

          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default DemoSuccess;